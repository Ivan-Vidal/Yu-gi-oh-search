import { NgModule } from '@angular/core';
import { AuthService} from './auth/auth.service'
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
{ path: '', redirectTo: 'home',  canActivate: [AuthService], pathMatch: 'full'},
{ path: 'home', component: HomeComponent, canActivate: [AuthService] },
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'details/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
