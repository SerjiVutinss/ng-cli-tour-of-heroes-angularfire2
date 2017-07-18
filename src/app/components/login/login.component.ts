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

  username: string;
  password: string;

  success: boolean;
  errorMsg: string = '';

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // loginGoogle(): void {
  //   this.authService.loginGoogle();
  // }

  loginEmailPassword(): void {
    this.authService.loginEmailPassword(this.username.trim(), this.password.trim()).catch(error => {
      this.errorMsg = "Login failed!";
    });
  };
}
  // loginEmailPassword(): void {
  //   console.log(this.username);
  //   console.log(this.password);
  // }
