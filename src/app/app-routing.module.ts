
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
} from './components';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'hero-detail/:id',
        component: HeroDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }