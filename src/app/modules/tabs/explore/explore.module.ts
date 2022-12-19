import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';
import { SharedModule } from '@shared/shared.module';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { ExploreRoutingModule } from './explore-routing.module';

@NgModule({
  declarations: [ExplorePageComponent],
  imports: [
    SharedModule,
    ExploreRoutingModule,
    SharedGeneralModuleModule
  ],
  exports: [RouterModule]
})
export class ExploreModule { }
