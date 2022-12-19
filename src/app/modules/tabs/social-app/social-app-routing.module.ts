import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SocialAppPageComponent } from './social-app-page/social-app-page.component';
import { AboutPagesComponent } from './about-pages/about-pages.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';

const routes: Routes = [
  { path: '', component: SocialAppPageComponent }, 
  { path: 'about', component: AboutPagesComponent },
  { path: 'friends', component: FriendsPageComponent },
  { path: 'friends/:page', component: FriendsPageComponent}, 
  { path: 'photos', component: PhotosPageComponent } 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class SocialAppRoutingModule { }
