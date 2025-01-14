import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService, User} from './user-services.service';
import { UserListComponent } from "./user-list/user-list.component";
import { UserFormComponent } from "./user-form/user-form.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserListComponent, UserFormComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  isCreating = false;
  userForm: FormGroup;
  isEditing = false;
  loading = false;
  error: string | null = null;

  constructor(
    private userService: UserServicesService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      organisationId: ['', Validators.required],
      roleId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.userService.getAllUsers()
      .subscribe({
        next: (users) => {
          this.users = users;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error loading users';
          this.loading = false;
          console.error(error);
        }
      });
  }
  onCreateUser(): void {
    this.isCreating = !this.isCreating;
    console.log(this.isCreating);
  }
  onSubmit(): void {
    if (this.userForm.valid) {
      this.loading = true;
      const userData = this.userForm.value;

      if (this.isEditing && this.selectedUser) {
        this.userService.updateUser(this.selectedUser.id, userData)
          .subscribe({
            next: () => {
              this.loadUsers();
              this.resetForm();
            },
            error: (error) => {
              this.error = 'Error updating user';
              this.loading = false;
              console.error(error);
            }
          });
      } else {
        this.userService.createUser(userData as Partial<User>)
          .subscribe({
            next: () => {
              this.loadUsers();
              this.resetForm();
            },
            error: (error) => {
              this.error = 'Error creating user';
              this.loading = false;
              console.error(error);
            }
          });
      }
    }
  }

  editUser(user: User): void {
    this.selectedUser = user;
    this.isEditing = true;
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      organisationId: user.organisationId,
      roleId: user.roleId
    });
    // Don't patch password for security reasons
    this.userForm.get('password')?.clearValidators();
    this.userForm.get('password')?.updateValueAndValidity();
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id)
        .subscribe({
          next: () => {
            this.loadUsers();
          },
          error: (error) => {
            this.error = 'Error deleting user';
            console.error(error);
          }
        });
    }
  }

  resetForm(): void {
    this.userForm.reset();
    this.selectedUser = null;
    this.isEditing = false;
    this.error = null;
    this.loading = false;
    // Reset password validator
    this.userForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    this.userForm.get('password')?.updateValueAndValidity();
  }
}