import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {

    }

    public canActivate() {

        if (!firebase.auth().currentUser) {
            this.router.navigate(["/login"]);
            return false;

        } else {
            return true;
        }
    }
}