import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app'

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  isLoggedIn: Boolean;

  constructor(public afAuth: AngularFireAuth) {

    if (afAuth.authState)
      this.user = afAuth.authState;
  }

  isAuthenticated(): boolean {
    return this.user != null;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}