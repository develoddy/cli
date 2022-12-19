import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { SharedModule } from '@shared/shared.module';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';
import { BookmarksPageComponent } from './bookmarks-page/bookmarks-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BookmarksPageComponent],
  imports: [
    SharedModule,
    BookmarksRoutingModule,
    SharedGeneralModuleModule
  ],
  exports: [RouterModule]
})
export class BookmarksModule { }
