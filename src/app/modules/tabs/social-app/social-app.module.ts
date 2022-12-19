import { NgModule } from '@angular/core';
import { SocialAppPageComponent } from './social-app-page/social-app-page.component';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';
import { SharedModule } from '@shared/shared.module';
import { SocialAppRoutingModule } from './social-app-routing.module';
import { RouterModule } from '@angular/router';
import { AboutPagesComponent } from './about-pages/about-pages.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';

@NgModule({
  
  imports: [
    SharedModule,
    SocialAppRoutingModule,
    SharedGeneralModuleModule
  ],
  declarations: [
    SocialAppPageComponent, 
    AboutPagesComponent, 
    FriendsPageComponent, 
    PhotosPageComponent],
  exports: [RouterModule]
})
export class SocialAppModule { }
