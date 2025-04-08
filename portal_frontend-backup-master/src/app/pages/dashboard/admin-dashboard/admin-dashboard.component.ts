import { Component, OnInit } from "@angular/core";

import { MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { AssignCoordinatorDialogComponent } from "../assign-coordinator-dialog/assign-coordinator-dialog.component";
import { AuthService } from "../../../services/auth.service";
import { ClubService } from "../../../services/club.service";
import { AdminDashboardService } from "../../../services/admin-dashboard.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MemberDashboardService } from "../../../services/member-dashboard.service";
import { Router } from "@angular/router";

export interface Club {
  id?: number;
  name: string;
  description: string;
  coordinators: any[];
}

@Component({
  selector: "app-admin-dashboard",
  standalone: true,
  imports: [FormsModule, CommonModule, MatDialogModule],
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  clubs: Club[] = [];
  filteredClubs: Club[] = [];
  searchQuery: string = "";
  showClubs: boolean = false;
  newClub: Club = { name: "", description: "", coordinators: [] };

  constructor(
    private adminService: AdminDashboardService,
    private clubService: ClubService,
    private authService: AuthService,
    private dialog: MatDialog,
    private dashboardService: MemberDashboardService,
    private router:Router
    
  ) {}

  ngOnInit(): void {
    this.getAllClubs();
  }

  getAllClubs(): void {
    this.adminService.getAllClubs().subscribe((data) => {
      this.clubs = data;
      this.filteredClubs = [...this.clubs];
    });
  }

  toggleClubList(): void {
    this.showClubs = !this.showClubs;
    if (this.showClubs) {
      this.getAllClubs();
    }
  }

  filterClubs(): void {
    this.filteredClubs = this.clubs.filter((club) =>
      club.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  createClub(): void {
    if (this.newClub.name.trim()) {
      this.clubService.createClub(this.newClub).subscribe(() => {
        this.newClub = { name: "", description: "", coordinators: [] };
        this.getAllClubs();
      });
    }
  }

  confirmDeleteClub(clubId: number): void {
    if (window.confirm("Are you sure you want to delete this club?")) {
      this.deleteClub(clubId);
    }
  }

  deleteClub(id: number): void {
    this.adminService.deleteClub(id).subscribe(() => {
      this.clubs = this.clubs.filter((club) => club.id !== id);
      this.filteredClubs = [...this.clubs];
    });
  }

  
  
  openAssignCoordinatorDialog(clubId: number) {
    console.log('Opening AssignCoordinatorDialog with clubId:', clubId);
    
    const dialogRef = this.dialog.open(AssignCoordinatorDialogComponent, {
      data: { clubId: clubId }
    });
  
    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog closed');
      this.getAllClubs(); // Refresh club list after dialog closes
    });
  }

  logout(): void {
    this.dashboardService.logout();
    this.router.navigate(["/login"]); // ✅ Redirect to login after logout
  }
  
}
