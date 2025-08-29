import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'login', component: LoginScreenComponent,
  },
  {
    path:'home', component: HomeComponent, canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
