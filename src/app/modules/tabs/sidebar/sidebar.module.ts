import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule
  ], exports: [
    SidebarComponent,
    RouterModule
  ],
})
export class SidebarModule { }