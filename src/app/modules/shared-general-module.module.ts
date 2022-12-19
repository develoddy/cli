import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarPageComponent } from './tabs/sidebar/sidebar-page/sidebar-page.component';
import { SidebarModule } from './tabs/sidebar/sidebar.module';


@NgModule({
  imports: [
    CommonModule,
    SidebarModule
  ],
  declarations: [
    SidebarPageComponent,
  ],
  exports: [
    SidebarPageComponent
  ]
})
export class SharedGeneralModuleModule { }
