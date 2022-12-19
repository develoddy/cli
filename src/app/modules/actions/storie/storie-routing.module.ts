import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// COMPONENTS
import { StorieMainComponent } from './storie-main/storie-main.component';
import { StorieCreateComponent } from './storie-create/storie-create.component';

// ROUTING
const storieRoutes: Routes = [
    {
        path: '',
        component: StorieMainComponent,
        children: [
            { path: "", redirectTo: "create", pathMatch: "full" },
            { path: 'create', component: StorieCreateComponent},
        ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(storieRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class StorieRoutingModule { }
