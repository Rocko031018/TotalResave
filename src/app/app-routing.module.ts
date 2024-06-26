import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { profile } from 'console';
import { ProfileComponent } from './components/profile/profile.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { AdministratorComponent } from './administrator/administrator.component';


const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'profile', component: ProfileComponent},
{path: 'reserve', component: ReserveComponent},
{path:  'administrator', component: AdministratorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
