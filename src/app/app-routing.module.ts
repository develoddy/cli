import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SkeletonComponent } from "./layout/skeleton/skeleton.component";
import { AuthGuard } from "@core/guards/auth.guard";

const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: "login",
        component: SkeletonComponent,
        
        children: [
            {
                path: "",
                loadChildren: "./modules/login/login.module#LoginModule",
            },
        ],
    },
    {
        path: "users",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            { path: "", loadChildren: "./modules/user/user.module#UserModule" },
        ],
    },

    {
        path: "social-app",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                loadChildren: "./modules/tabs/social-app/social-app.module#SocialAppModule",
            },
        ],
    },
    {
        path: "profile",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                loadChildren:
                    "./modules/tabs/profile/profile.module#ProfileModule",
            },
        ],
    },
    {
        path: "email",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            { 
                path: "", 
                loadChildren: "./modules/tabs/email/email.module#EmailModule" 
            },
        ],
    },
    {
        path: "chat",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                loadChildren:
                    "./modules/tabs/chat/chat.module#ChatModule",
            },
        ],
    },
    {
        path: "bookmarks",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                loadChildren:
                    "./modules/tabs/bookmarks/bookmarks.module#BookmarksModule",
            },
        ],
    },
    {
        path: "contacts",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                loadChildren:
                    "./modules/tabs/contacts/contacts.module#ContactsModule",
            },
        ],
    },
    {
        path: "search",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                loadChildren:
                    "./modules/tabs/search/search.module#SearchModule",
            },
        ],
    },
    {
        path: "explore",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                loadChildren:
                    "./modules/tabs/explore/explore.module#ExploreModule",
            },
        ],
    },
    {
        path: "post",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            { 
                path: "", 
                loadChildren: "./modules/actions/post/post.module#PostModule" 
            },
        ],
    },
    {
        path: "storie",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            { 
                path: "", 
                loadChildren: "./modules/actions/storie/storie.module#StorieModule"
            },
        ],
    },
    
   /* {
        path: "account",
        component: SkeletonComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "",
                loadChildren:
                    "./modules/tabs/account/account.module#AccountModule",
            },
        ],
    },
    
    {
        path: "direct",
        component: SkeletonComponent,
        children: [
            {
                path: "",
                loadChildren:
                    "./modules/tabs/direct/direct.module#DirectModule",
            },
        ], 
    },*/
    
    { path: "**", redirectTo: "social-app", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }), CommonModule],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule {}
