import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from '@modules/tabs/chat/chat-page/chat-page.component';

const routes: Routes = [
  {
    path: '',
    component: ChatPageComponent
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
export class ChatRoutingModule { }
