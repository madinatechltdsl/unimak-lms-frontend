import { Component } from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private authService: AuthService) { }

}
