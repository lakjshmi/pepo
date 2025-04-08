import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppEvent, Club } from '../../../models/Appevent';

@Component({
  selector: 'app-my-events',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css'],
})
export class MyEventsComponent implements OnInit {
  events: AppEvent[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  fetchRegisteredEvents() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        console.error('❌ User ID not found. Please log in.');
        return;
      }
  
      const url = `http://localhost:8066/api/event-registrations/user/${userId}`;
      console.log(`🔄 Fetching events from: ${url}`);
  
      this.http.get<any[]>(url).subscribe({
        next: (data) => {
          console.log('✅ Fetched raw API response:', JSON.stringify(data, null, 2));
  
          if (!Array.isArray(data)) {
            console.error('❌ Unexpected API response format:', data);
            this.events = [];
            this.loading = false;
            return;
          }
  
          this.events = data.map(registration => ({
            id: registration.event?.id ?? 0,
            name: registration.event?.name || 'Unnamed Event',  // ✅ Fix: Access event name
            eventDate: registration.event?.eventDate || 'Unknown Date', // ✅ Fix: Access event date
            description: registration.event?.description || 'No description available',
            registrationFeeMembers: registration.event?.registrationFeeMembers ?? 0,
            registrationFeeNonMembers: registration.event?.registrationFeeNonMembers ?? 0,
            imageUrl: registration.event?.imageUrl || null,
            createdAt: registration.event?.createdAt || new Date().toISOString(),
            visibility: registration.event?.visibility || 'public',
            club: {
              id: registration.event?.club?.id ?? 0,
              name: registration.event?.club?.name || 'Unknown Club',
              description: registration.event?.club?.description || 'No description',
              createdAt: registration.event?.club?.createdAt || new Date().toISOString(),
            }
          }));
  
          console.log('✅ Processed events:', JSON.stringify(this.events, null, 2));
          this.loading = false;
        },
        error: (err) => {
          console.error('❌ Failed to load registered events:', err);
          this.loading = false;
        },
      });
    } else {
      console.error('❌ localStorage is not available.');
    }
  }
  
  

  ngOnInit() {
    this.fetchRegisteredEvents();
  }
}
