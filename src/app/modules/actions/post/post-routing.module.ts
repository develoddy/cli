import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// COMPONENTS
import { PostMainComponent } from './post-main/post-main.component';
import { PostCreateComponent } from './post-create/post-create.component';

// ROUTING
const postlRoutes: Routes = [
    {
        path: '',
        component: PostMainComponent,
        children: [
            { path: "", redirectTo: "create", pathMatch: "full" },
            { path: 'create', component: PostCreateComponent},
        ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(postlRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class PostRoutingModule { }
