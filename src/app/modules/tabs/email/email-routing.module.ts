import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ReceivedComponent } from './components/received/received.component';
import { SendedComponent } from './components/sended/sended.component';

// ROUTING
const emailRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: "", redirectTo: "received", pathMatch: "full" },
            { path: 'send', component: AddComponent},
            { path: 'received', component: ReceivedComponent},
            { path: 'received/:page', component: SendedComponent},
            { path: 'sended', component: SendedComponent},
            { path: 'sended/:page', component: SendedComponent},
        ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(emailRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class EmailRoutingModule { }
