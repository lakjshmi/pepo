import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core'; // Import PLATFORM_ID
import { isPlatformBrowser } from '@angular/common'; // Import this to check the platform
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';
import { environment } from '../../environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl; // ✅ Use environment variable

  private currentUserEmail: string = '';

setEmail(email: string): void {
  this.currentUserEmail = email;
}

getEmail(): string {
  return this.currentUserEmail;
}
getUserById(userId: number): Observable<User> {
  return this.http.get<User>(`${this.apiUrl}/users/${userId}`);
}

  private usersUrl = `${environment.apiUrl}/users`;
  
  


  // Constructor that injects HttpClient and PLATFORM_ID
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // Only use localStorage in the browser
  private getLocalStorageItem(key: string): string | null {
    console.log(
      'isPlatformBrowser(this.platformId)',
      isPlatformBrowser(this.platformId)
    );
    if (isPlatformBrowser(this.platformId)) {
      console.log('localStorage.getItem(key)', localStorage.getItem(key));
      return localStorage.getItem(key);
    }
    return null;
  }

  private setLocalStorageItem(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }

  // Backend login
  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/users/login`, { email, password })
      .pipe(
        tap((response: any) => {
          this.setEmail(response.email); // ⬅️ Add this line to store user's email

          console.log('local storage has:', localStorage);
          console.log(response);
          console.log('response', response);

          console.log('response.userId', response.id);
          console.log('response.role', response.role);

          this.setLocalStorageItem('userId', response.id);
          this.setLocalStorageItem('role', response.role); // Store user role
          console.log('response.id', response.userId);

          if (response.userId) {
            console.log('response.userId', response.id);
            this.setLocalStorageItem('userId', response.userId);
          }
        })
      );
  }

  // // Get stored user role
  // getRole(): string | null {
  //   return this.getLocalStorageItem('role');
  // }

  // Signup method to register new users
  signup(
    name: string,
    email: string,
    password: string,
    phoneNumber: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, {
      name,
      email,
      password,
      phoneNumber,
    });
  }

  // Logout the user by removing token and role
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userId");
    }
  }
  



  // Check if the user is logged in by verifying token presence
  isLoggedIn(): boolean {
    return !!this.getLocalStorageItem('token');
  }

  

  //Get user Id directly fr
  // getUserId(): string | null {
  //   console.log('User Id is ' + this.getLocalStorageItem('userId'));
  //   return this.getLocalStorageItem('userId');
  //   //return '3';
  // }
  getUserId(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('userId');
    }
    return null;
  }
  

  getToken(): string | null {
    return this.getLocalStorageItem('token');
  }
  // ✅ New: Fetch all users (for searching potential coordinators)
  
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
  // Search users by name or email
  searchUsers(query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users/search?query=${query}`);
  }

  // Promote user to coordinator
  promoteToCoordinator(clubId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/clubs/${clubId}/promote`, { userId });
  }

  getRole(): Observable<string | null> {
    const role = localStorage.getItem('role'); // Get stored role
    console.log("Fetched role from local storage:", role);
    return of(role); // Return as observable
  }

  setRole(role: string): void {
    console.log("Setting role in local storage:", role);
    localStorage.setItem('role', role);
  }

  // logout(): void {
  //   console.log("Logging out and clearing local storage...");
  //   localStorage.removeItem('role');
  // }

  
}
