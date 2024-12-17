import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  otp = '';
  errorMessage = '';

  private defaultOtp = '123456'; // Mock OTP

  constructor(private router: Router) {}

  verifyOtp() {
    if (this.otp === this.defaultOtp) {
      // Redirect to admin page upon successful OTP verification
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Invalid OTP. Please try again.';
    }
  }

}
