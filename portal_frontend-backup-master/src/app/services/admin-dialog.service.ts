import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminDialogService {
  
  private baseUrl = `${environment.apiUrl}/clubs`;
  private usersUrl = `${environment.apiUrl}/users`; // Adjust according to your backend

  constructor(private http: HttpClient) {}

  getMembersByClub(clubId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${clubId}/{members}`);
  }

  searchClubMembers(clubId: number, query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/clubs/${clubId}/search-members`, { 
      params: { query } 
    });
  }

  
  
}
