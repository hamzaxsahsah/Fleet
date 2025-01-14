import { Component , OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import { User , UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent  implements OnInit{
  currentView: 'list' | 'grid' = 'list';

  setListView(): void {
    this.currentView = 'list';
  }

  setGridView(): void {
    this.currentView = 'grid';
  }
  loading = false;
  error: string | null = null;
  users: User[] = [];

  
    constructor(
      private userService: UserServicesService,
    ) {
      
    }
  
    ngOnInit(): void {
      this.loadUsers();
      console.log(this.users);
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
  
}
