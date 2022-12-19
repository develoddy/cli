import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsPageComponent
  }, 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class ContactsRoutingModule { }
