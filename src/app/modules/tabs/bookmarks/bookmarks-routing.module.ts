import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksPageComponent } from './bookmarks-page/bookmarks-page.component';

const routes: Routes = [
  {
    path: '',
    component: BookmarksPageComponent
  }, 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class BookmarksRoutingModule { }
