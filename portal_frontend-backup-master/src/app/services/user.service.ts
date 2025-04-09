import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8066/api/users'; // Update if different

  constructor(private http: HttpClient) {}

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/profile/${userId}`);
  }
  updateUserProfile(email: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile?email=${email}`, data, { responseType: 'text' });
  }
  
  
  
  // OR if you use token & want /me
  getLoggedInUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`);
  }
}
