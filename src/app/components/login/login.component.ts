import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  success: boolean;
  error: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // loginGoogle(): void {
  //   this.authService.loginGoogle();
  // }

  loginEmailPassword(email: string, password: string): void {
    this.authService.loginEmailPassword(email.trim(), password.trim());
  }
}
