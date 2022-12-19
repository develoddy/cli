import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorePageComponent } from './explore-page/explore-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExplorePageComponent
  }, 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class ExploreRoutingModule { }
