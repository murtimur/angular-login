import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { ServersettingComponent } from './serversetting/serversetting.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'setting', component: ServersettingComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [authGuard] },
  { path: 'userlist', component: UserlistComponent, canActivate: [authGuard] },
  {
    path: 'user/:username',
    component: UserupdateComponent,
    canActivate: [authGuard],
  },
];
