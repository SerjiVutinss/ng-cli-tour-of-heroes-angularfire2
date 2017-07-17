import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services';
import { MdDialog } from '@angular/material';
import { AlertDialogComponent } from './components/dialogs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Tour of Heroes';

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  private isCollapsed: boolean;

  private alertMessage: String;
  private alertType: String;

  constructor(
    public authService: AuthService,
    private router: Router,
    public dialog: MdDialog
    ) {
    this.isCollapsed = true;
    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          //console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.displayName;
          this.user_email = auth.email;
          //console.log("Logged in");
          //console.log(auth);
          this.router.navigate(['/home']);

          //this.openDialog('Logged in!');
        }
      }
    );
  }
  openDialog(dialogMsg: string) {
    this.dialog.open(AlertDialogComponent, {
      data: dialogMsg,
    });
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['login']);
    //this.openDialog('Logged out!');
  }

}