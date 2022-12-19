import { NgModule } from '@angular/core';
import { PostMainComponent } from './post-main/post-main.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { SharedGeneralModuleModule } from '@modules/shared-general-module.module';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [PostMainComponent, PostCreateComponent],
  imports: [
    FormsModule,
    SharedModule,
    PostRoutingModule,
    SharedGeneralModuleModule
  ],
  exports: [PostMainComponent, PostCreateComponent],
})
export class PostModule { }
