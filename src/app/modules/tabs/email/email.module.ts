import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';
import { SharedModule } from '@shared/shared.module';
import { AddComponent } from './components/add/add.component';
import { MainComponent } from './components/main/main.component';
import { ReceivedComponent } from './components/received/received.component';
import { SendedComponent } from './components/sended/sended.component';
import { EmailRoutingModule } from './email-routing.module';
// import { EmailRoutingModule } from './email-routing.module';

@NgModule({
  declarations: [MainComponent, AddComponent, ReceivedComponent, SendedComponent],
  imports: [
    FormsModule,
    SharedModule,
    EmailRoutingModule,
    SharedGeneralModuleModule
  ],
  exports: [ MainComponent, AddComponent, ReceivedComponent, SendedComponent ],
  providers:[]
})
export class EmailModule { }
