import { NgModule } from '@angular/core';
import { StorieMainComponent } from './storie-main/storie-main.component';
import { StorieCreateComponent } from './storie-create/storie-create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';
import { StorieRoutingModule } from './storie-routing.module';

@NgModule({
  declarations: [StorieMainComponent, StorieCreateComponent],
  imports: [
    FormsModule,
    SharedModule,
    StorieRoutingModule,
    SharedGeneralModuleModule
  ],
  exports: [StorieMainComponent, StorieCreateComponent],
})
export class StorieModule { }
