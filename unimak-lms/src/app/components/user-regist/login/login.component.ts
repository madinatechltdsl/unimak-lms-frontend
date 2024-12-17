import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {AuthService} from "../../../service/auth.service";
import {HeaderComponent} from "../../header/header.component";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,  HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // constructor(private authService: AuthService) { }

  loginData = { username: '', password: '' };
  errorMessage = '';
  private defaultUsername = 'admin@example.com';
  private defaultPassword = 'admin123';

  constructor(private router: Router) {}

  onLogin() {
    if (
      this.loginData.username === this.defaultUsername &&
      this.loginData.password === this.defaultPassword
    ) {
      // Navigate to OTP page
      this.router.navigate(['/otp']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

}
