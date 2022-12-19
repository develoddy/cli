import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatPageComponent } from '@modules/tabs/chat/chat-page/chat-page.component';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';
import { SharedModule } from '@shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [ChatPageComponent],
  imports: [
    SharedModule,
    ChatRoutingModule,
    SharedGeneralModuleModule
  ],
  exports: [RouterModule]
})
export class ChatModule { }
