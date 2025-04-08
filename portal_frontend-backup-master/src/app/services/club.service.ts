import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';


export interface Club {
  id?: number;
  name: string;
  description: string;
  coordinators: any[]; // List of coordinator names
}

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  private apiUrl = `${environment.apiUrl}/clubs`;

  constructor(private http: HttpClient) {}

  // Fetch all clubs
  getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(this.apiUrl);
  }

  // Fetch club by ID
  getClubById(id: number): Observable<Club> {
    return this.http.get<Club>(`${this.apiUrl}/${id}`);
  }

  // Fetch club by name
  getClubByName(name: string): Observable<Club> {
    return this.http.get<Club>(`${this.apiUrl}/name/${name}`);
  }

  // Create a new club
  createClub(club: Club): Observable<Club> {  // Ensure it returns an Observable
    return this.http.post<Club>(`${this.apiUrl}`, club);
  }
  
  // Assign coordinators to a club
  assignCoordinators(clubId: number, userIds: number[]): Observable<Club> {
    return this.http.put<Club>(`${this.apiUrl}/${clubId}/coordinators`, userIds);
  }

  // Update club details
  updateClub(id: number, updatedClub: Partial<Club>): Observable<Club> {
    return this.http.put<Club>(`${this.apiUrl}/${id}`, updatedClub);
  }

  // Delete a club
  deleteClub(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }

  // Fetch club members
  getClubMembers(clubId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${clubId}/members`);
  }
}
