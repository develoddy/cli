import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-page/login.component';

const routes: Routes = [
  {
      path: '',
      component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class LoginRoutingModule { }
