import { Routes } from '@angular/router';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { MemberDashboardComponent } from './pages/dashboard/member-dashboard/member-dashboard.component';
import { CoordinatorDashboardComponent } from './pages/dashboard/coordinator-dashboard/coordinator-dashboard.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login
  { path: 'login', component: LoginComponent }, // ✅ Add explicit login route
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: MemberDashboardComponent },
  { path: 'coordinatorDashboard', component: CoordinatorDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },

  { path: '**', redirectTo: '/login' }, // ✅ Catch-all redirect to login
];
