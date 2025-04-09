import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppEvent } from '../../../models/AppEvent';



@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './explore.component.html',
})
export class ExploreComponent implements OnInit {
  events: AppEvent[] = [];
  loading = true;
  apiUrl = 'http://localhost:8066/api/events'; // ✅ Your backend endpoint
  userId: number | null = null; // ✅ Get user ID dynamically


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchEvents();
    this.getUserId();
  }
  getUserId() {
    const userId = localStorage.getItem('userId'); // ✅ Fetch userId from localStorage
    if (userId) {
      this.userId = parseInt(userId); // ✅ Convert to number
    } else {
      console.error('User ID not found. Make sure to log in.');
    }
  }
  

  fetchEvents() {
    this.http.get<AppEvent[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.events = data; // ✅ Storing API response
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load events:', err);
        this.loading = false;
      },
    });
  }
  registerForEvent(eventId: number) {
    const registerUrl = `http://localhost:8066/api/event-registrations/${this.userId}/${eventId}`;
    
    this.http.post(registerUrl, {}).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        alert('Successfully registered for the event!');
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert('Failed to register. Try again later.');
      },
    });
  }
}
