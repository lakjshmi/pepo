import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  //backendlogin uncomment later
  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response); //here storing role in local storage
        localStorage.setItem('userId', response.id);

        console.log('Logged-in User ID:', response.id);
        console.log(response.role);
        console.log('Role from login component is ', response.role);

        //redirect based on role
        if (response.role == 'ADMIN') {
          console.log(response);
          this.router.navigate(['/admin-dashboard']);
        } else if (
          response.role == 'MEMBER'           
        ) {
          this.router.navigate(['/dashboard']);
        } else if(
          response.role == 'COORDINATOR'
        ){
          this.router.navigate(['/coordinatorDashboard']);
        }
        else {
          alert('Invalid role assigned. FIX YOUR CODE!!!LOL');
        }
      },
      error: (err) => {
        console.error(err);
        alert('Login failed! Check your credentials.');
      },
    });
  }
}
