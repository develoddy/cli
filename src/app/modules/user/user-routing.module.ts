import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
//import { LoginComponent } from '../login/login.component';



const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }, 
  {
    path: ':page',
    component: UserListComponent
  }, 
  {
      path: 'detail/:id',
      component: UserDetailComponent
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // }, 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule { }
