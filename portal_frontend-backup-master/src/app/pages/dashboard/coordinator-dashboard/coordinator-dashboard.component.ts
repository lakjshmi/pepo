import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MemberDashboardService } from "../../../services/member-dashboard.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-coordinator-dashboard",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./coordinator-dashboard.component.html",
  styleUrls: ["./coordinator-dashboard.component.css"],
})
export class CoordinatorDashboardComponent implements OnInit {
  clubs: any[] = [];
  selectedClubId: number | null = null;
  showCreateForm = false;

  newEvent = {
    name: "",
    description: "",
    eventDate: "",
    imageUrl: "",
    registrationFeeMembers: 0,
    registrationFeeNonMembers: 0,
    visibility: "PUBLIC",
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private dashboardService: MemberDashboardService
  ) {}

  ngOnInit(): void {
    this.loadAllClubs();
  }

  loadAllClubs() {
    this.http.get<any[]>("http://localhost:8066/api/clubs").subscribe({
      next: (res) => {
        this.clubs = res;
      },
      error: (err) => {
        console.error("Failed to load clubs:", err);
      },
    });
  }

  openCreateForm() {
    if (!this.selectedClubId) {
      alert("Please select a club first.");
      return;
    }
    this.showCreateForm = true;
  }

  createEvent() {
    if (!this.selectedClubId) {
      alert("No club selected.");
      return;
    }

    const url = `http://localhost:8066/api/events/${this.selectedClubId}`;
    const formattedDate = this.formatDateToLocalDateTime(
      this.newEvent.eventDate
    );

    const payload = {
      ...this.newEvent,
      eventDate: formattedDate,
    };

    this.http.post(url, payload).subscribe({
      next: () => {
        alert("Event created successfully!");
        this.showCreateForm = false;
        this.newEvent = {
          name: "",
          description: "",
          eventDate: "",
          imageUrl: "",
          registrationFeeMembers: 0,
          registrationFeeNonMembers: 0,
          visibility: "PUBLIC",
        };
      },
      error: (err) => {
        console.error("Error creating event:", err);
        alert("Error while creating event");
      },
    });
  }
  formatDateToLocalDateTime(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    const seconds = this.padZero(date.getSeconds());
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  padZero(n: number): string {
    return n < 10 ? "0" + n : n.toString();
  }

  logout(): void {
    this.dashboardService.logout();
    // if (this.router) {
    //   this.router.navigate(["/login"]);
    // } else {
    //   console.error('Router is undefined');
    // }
  }
}
