import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService} from './auth/auth.service'

const routes: Routes = [
{ path: '', redirectTo: 'home',  canActivate: [AuthService], pathMatch: 'full'},
{ path: 'home', component: HomeComponent, canActivate: [AuthService] },
{ path: 'login', component: LoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
