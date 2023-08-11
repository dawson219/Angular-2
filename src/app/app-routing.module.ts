import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { AboutUsComponent } from './_components/about-us/about-us.component';
import { LoginComponent } from './_components/login/login.component';
import { NotFoundComponent } from './_components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
