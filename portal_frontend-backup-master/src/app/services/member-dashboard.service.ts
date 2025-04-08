import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MemberDashboardService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  getMyClubs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clubs/my`);
  }

  getAvailableClubs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clubs/available`);
  }

  getPublicEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/events/public`);
  }

  getMyEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/events/my`);
  }

  joinClub(clubId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/clubs/join/${clubId}`, {});
  }

  registerForEvent(eventId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/events/register/${eventId}`, {});
  }

  checkIfCoordinator(): Observable<boolean> {
    return this.http
      .get<{ isCoordinator: boolean }>('api/user/isCoordinator')
      .pipe(
        map((response) => response.isCoordinator) // Ensure correct property access
      );
  }

  logout(): void {
    localStorage.clear(); // Clear stored authentication data
    sessionStorage.clear();
    this.router.navigate(['/login']); // Redirect to login page
  }
}
