import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';
import { SharedModule } from '@shared/shared.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    SharedModule,
    ProfileRoutingModule,
    SharedGeneralModuleModule
  ],
  exports: [RouterModule]
})
export class ProfileModule { }
