// IMPORTS COMPONENTS.
import { CardUserComponent } from './cards/card-user/card-user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalCreatePostComponent } from './modals/modal-create-post/modal-create-post.component';

// TIMELINE
import { ColLeftComponent } from './tabs/social-app/timeline/col-left/col-left.component';
import { ColCenterComponent } from './tabs/social-app/timeline/col-center/col-center.component';
import { ColRightComponent } from './tabs/social-app/timeline/col-right/col-right.component';

// COMPONENTS
export const components: any[]  = [
    CardUserComponent,
    SidebarComponent,
    // TIMELINE
    ColLeftComponent,
    ColCenterComponent,
    ColRightComponent,
    // MODALS
    ModalCreatePostComponent
];

// EXPORT ALL COMPONENTS.
export * from './cards/card-user/card-user.component';
export * from './sidebar/sidebar.component';
export * from './modals/modal-create-post/modal-create-post.component';