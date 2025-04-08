import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MemberDashboardService } from '../../../services/member-dashboard.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from '../explore/explore.component';
import { MyEventsComponent } from '../my-events/my-events.component';


@Component({
  selector: 'app-member-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, ExploreComponent, MyEventsComponent],
  templateUrl: './member-dashboard.component.html',
  styleUrls: ['./member-dashboard.component.css'],
})
export class MemberDashboardComponent implements OnInit {
  constructor(
      private router: Router,
      
      private dashboardService: MemberDashboardService
    ) {}
  ngOnInit(): void {
    
  }
  activeTab = 'explore'; // default

  logout(): void {
    this.dashboardService.logout();
  }

}