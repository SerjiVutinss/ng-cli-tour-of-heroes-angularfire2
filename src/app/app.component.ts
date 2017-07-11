import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Tour of Heroes (Firebase + Auth)';

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  private isCollapsed: boolean;

  constructor(public authService: AuthService, private router: Router) {
    this.isCollapsed = true;
    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.displayName;
          this.user_email = auth.email;
          console.log("Logged in");
          console.log(auth);
          this.router.navigate(['/home']);
        }
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}