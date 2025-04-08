import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Club } from './club.service';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class AdminDashboardService {
  private baseUrl = `${environment.apiUrl}/clubs`;
  private usersUrl = `${environment.apiUrl}/users`; // ✅ Added endpoint to fetch users
  

  constructor(private http: HttpClient) {}

  // Fetch all clubs
  getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(this.baseUrl);
  }

  // Fetch a club by name
  getClubByName(name: string): Observable<Club> {
    return this.http.get<Club>(`${this.baseUrl}/name/${name}`);
  }

  // Delete a club by ID
  deleteClub(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }

  // Update club details
  updateClub(id: number, updatedClub: Partial<Club>): Observable<Club> {
    return this.http.put<Club>(`${this.baseUrl}/${id}`, updatedClub);
  }

  // Get members of a club
  getClubMembers(clubId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${clubId}/members`);
  }

  // Remove a member from a club
  removeMember(clubId: number, userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${clubId}/members/${userId}`);
  }

  

  // ✅ New: Promote a member to coordinator
  promoteToCoordinator(clubId: number, userId: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${clubId}/members/${userId}/promote`, {});
  }
}
