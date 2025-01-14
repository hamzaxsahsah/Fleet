import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  organisationId: number;
  roleId: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  private apiUrl = 'http://localhost:3000'; // Adjust this based on your API configuration

  constructor(private http: HttpClient) { }

  /**
   * Get a user by their ID
   * @param id The user's ID
   */
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`);
  }

  /**
   * Create a new user
   * @param userData The user data to create
   */
  createUser(userData: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user`, userData);
  }

  /**
   * Update an existing user
   * @param id The user's ID
   * @param userData The updated user data
   */
  updateUser(id: number, userData: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/user/${id}`, userData);
  }

  /**
   * Delete a user
   * @param id The user's ID
   */
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/user/${id}`);
  }

  /**
   * Get all users
   */
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  /**
   * Assign a role to a user
   * @param userId The user's ID
   * @param roleId The role's ID
   */
  assignRole(userId: number, roleId: number): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user/${userId}/role/${roleId}`, {});
  }

  /**
   * Remove a role from a user
   * @param userId The user's ID
   * @param roleId The role's ID
   */
  removeRole(userId: number, roleId: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/user/${userId}/role/${roleId}`);
  }
}