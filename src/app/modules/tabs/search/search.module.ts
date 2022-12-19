import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';
import { SharedModule } from '@shared/shared.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    SharedModule,
    SearchRoutingModule,
    SharedGeneralModuleModule
  ],
  exports: [RouterModule]
})
export class SearchModule { }
