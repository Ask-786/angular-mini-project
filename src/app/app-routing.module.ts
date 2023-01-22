import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { IsNotAuthenticatedGuard } from './guards/is-not-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeMessageComponent,
    canActivate: [IsNotAuthenticatedGuard],
  },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [IsNotAuthenticatedGuard],
  },
  {
    path: 'signup',
    component: SignupFormComponent,
    canActivate: [IsNotAuthenticatedGuard],
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
