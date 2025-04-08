import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assign-coordinator-dialog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './assign-coordinator-dialog.component.html',
  styleUrls: ['./assign-coordinator-dialog.component.css']
})
export class AssignCoordinatorDialogComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];
  club: any = null; // Add club property

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<AssignCoordinatorDialogComponent>,
    private ngZone: NgZone, // Inject NgZone
    @Inject(MAT_DIALOG_DATA) public data: { clubId: number }
  ) {
    console.log('Received clubId:', this.data.clubId); // Debugging
  }

  ngOnInit() {
    this.fetchClubDetails();
  }

  fetchClubDetails() {
    const clubId = this.data.clubId;
    this.http.get<any>(`http://localhost:8066/api/clubs/${clubId}`)
      .subscribe(
        (response) => {
          this.club = response; // Assign response to club
        },
        (error) => {
          console.error('Error fetching club details', error);
        }
      );
  }

  
  onSearch() {
    if (this.searchQuery.trim().length === 0) {
      this.searchResults = [];
      return;
    }
  
    const clubId = this.data.clubId; 
    const url = `http://localhost:8066/api/clubs/${clubId}/search-users?query=${this.searchQuery}`;
  

   

    this.http.get<any[]>(url)
      .subscribe(
        (response) => {
          console.log('Search Results:', response);
          this.ngZone.run(() => { // Force UI update
            this.searchResults = response;
          });
        },
        (error) => {
          console.error('Error fetching search results', error);
          this.searchResults = [];
        }
      );
  }
  promoteToCoordinator(userId: number) {
    this.http.put<any>(`http://localhost:8066/api/clubs/${this.data.clubId}/members/${userId}/promote`, {})
      .subscribe(
        () => {
          console.log(`User ${userId} promoted to coordinator.`);
          this.dialogRef.close(); // Close dialog after successful promotion
        },
        (error) => {
          console.error('Error promoting user to coordinator', error);
        }
      );
  }
  
  
}
