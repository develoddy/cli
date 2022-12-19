import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { LoginRoutingModule } from '../login/login-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    SharedGeneralModuleModule
  ],
  declarations: [
    UserDetailComponent,
    UserListComponent,
  ],
  exports: []
})
export class UserModule { }
