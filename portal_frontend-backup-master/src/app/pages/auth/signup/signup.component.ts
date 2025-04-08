import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = ''; // New success message field

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value 
      ? null : { mismatch: true };
  }

  onSignup() {
    if (this.signupForm.invalid) return;

    const { name, email, password, phoneNumber } = this.signupForm.value;
    this.authService.signup(name, email, password, phoneNumber).subscribe({
      next: () => {
        this.successMessage = 'Signup successful! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 2000); // ✅ Wait 2 seconds before redirecting
      },
      error: (err) => this.errorMessage = err.error.message || 'Signup failed'
    });
  }
  
}
