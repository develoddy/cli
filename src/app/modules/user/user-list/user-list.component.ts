import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "../../../data/services/api/user.service";
import { AuthenticationServiceService } from "@core/http/authentication-service.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { FollowService } from "@data/services/api/follow.service";
//import { Profile, ResProfileFollow, User } from "@data/models/user";
//import { Follow } from "@data/models/follow";

import {
    User,
    Profile,
    ResUsers__,
    ResUsers__user,
    Follow,
} from "@data/models/post";

@Component({
    selector: "app-user-list",
    templateUrl: "./user-list.component.html",
    styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
    // PROPERTIES
    public userSubscription;
    public page: number;
    public next_page: number;
    public prev_page: number;
    public total;
    public pages;
    public status: string;
    public users: User[];
    //public profiles: Profile[];

    public resUsers__user: ResUsers__user[];
    public following_arr = [];
    public followed_arr = [];
    public error;

    // INPUT
    //@Input() resProfileFollow: ResProfileFollow;
    @Input() resUserFollow: ResUsers__;
    @Input() identity;
    @Input() stats;

    // CONSTRUCTOR
    constructor(
        private _auth: AuthenticationServiceService,
        private _userService: UserService,
        private _folloService: FollowService,
        private _router: ActivatedRoute,
        private _route: Router
    ) {
        this.identity = this._auth.getIdentity();
        this.stats = this._userService.getStats();
    }

    ngOnInit() {
        this.actualPage();
    }

    /**
     * ACTUALIZA LA PAGINA CADA VEZ QUE SE CAMBIA EL PARAMETRO EN LA URL
     */
    actualPage() {
        this._router.paramMap.subscribe((params: ParamMap) => {
            let page = +params.get("page");
            this.page = page;

            if (!page) {
                page = 0;
                this.next_page = page + 1;
                this.prev_page = page - 1;
            } else {
                this.next_page = page + 1;
                this.prev_page = page - 1;
                if (this.prev_page <= 0) {
                    this.prev_page = 0;
                }
            }
            this.getUsers(page); // Devolver listado de usuarios.
        });
    }

    /**
     * PINTA POR PANTALLA TODO LOS USUARIOS DE LA RED SOCIAL.
     * @param page NUMBER
     */
    getUsers(page: number) {
        this.userSubscription = this._userService.getAllUsers(page).subscribe(
            (r) => {
                if (!r.data) {
                    this.status = "error";
                } else {
                    this.resUserFollow = r.data;
                    this.total = this.resUserFollow.res_users.totalItems;
                    this.resUsers__user = this.resUserFollow.res_users.profiles;
                    this.pages = this.resUserFollow.res_users.totalPages;
                    this.following_arr = this.resUserFollow.users_following;

                    if (page > this.pages) {
                        setTimeout(() => {
                            this._route.navigate(["/users", 1]);
                        });
                    }
                }
            },
            (error) => {
                var errorMessage = error;
                if (errorMessage != null) {
                    this.status = "error";
                }
            }
        );
    }

    /**
     * followUser
     */
    public followUser(followed_id: number) {
        //var follow = new Follow(0, this.identity.id, followed_id, "", "");
        let follow: Follow = {
            user_id: this.identity.id,
            followed_id: followed_id,
        };

        this._folloService.addFollow(follow).subscribe(
            (response) => {
                if (!response.data) {
                    this.status = "error";
                } else {
                    this.status = "success";
                    this.following_arr.push(followed_id); // Guarda el id del usuario que acabo de seguir.
                }
            },
            (error) => {
                this.error = error;
            }
        );
    }

    /**
     * name
     */
    public unfollowUser(followed_id: number) {
        this._folloService.deleteFollow(followed_id).subscribe(
            (response) => {
                var search = this.following_arr.indexOf(followed_id);
                if (search != -1) {
                    this.following_arr.splice(search, 1); // Borra el elemento que ha encontrado.
                }
            },
            (error) => {
                this.error = error;
            }
        );
    }

    /**
     * DESTRUYE LA SUBSCRIPCION DEL APIREST
     */
    ngOnDestroy(): void {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    }
}
