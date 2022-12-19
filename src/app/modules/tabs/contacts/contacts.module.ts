import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';
import { SharedModule } from '@shared/shared.module';

import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  declarations: [ContactsPageComponent],
  imports: [
    SharedModule,
    ContactsRoutingModule,
    SharedGeneralModuleModule
  ],
  exports: [RouterModule]
})
export class ContactsModule { }
