import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AuthenticationServiceService } from "@core/http/authentication-service.service";
import {
    CommentCounts,
    Follow,
    Post,
    ResUsers__,
    ResUsers__user,
    User,
    UserImages,
} from "@data/models/post";
import { PostService } from "@data/services/api/post.service";
import { UserService } from "@data/services/api/user.service";
import { SpinnerServiceService } from "app/services/api/spinner-service.service";
import { ScriptsService } from "app/services/scripts/scripts.service";
import { DomSanitizer } from '@angular/platform-browser';
import { FollowService } from "@data/services/api/follow.service";
import { ImagesService } from "@data/services/api/images.service";

@Component({
    selector: "app-social-app-page",
    templateUrl: "./social-app-page.component.html",
    styleUrls: ["./social-app-page.component.css"],
})
export class SocialAppPageComponent implements OnInit {
    // PROPERTIES
    public title: string;
    public identity;
    public url;
    public page = 0;
    public limit = 0;
    public status;
    public userSubscription;
    public commentCounts: CommentCounts[];
    public currentPage;
    public totalItems;
    public totalPages;
    public posts: Post[];
    public followers: Follow[];
    public followings: Follow[];
    public images: UserImages[];
    public cssUrl: string;

    // CONSTRUCTOR
    constructor(
        private _authService    : AuthenticationServiceService,
        private _spinnerService : SpinnerServiceService,
        private _userService    : UserService,
        private _router         : Router,
        private _route          : ActivatedRoute,
        private _loadScripts    : ScriptsService,
        private _postService    : PostService,
        private _followService  : FollowService,
        private _imagesService  : ImagesService,
        public sanitizer        : DomSanitizer, 
    ) {
        if ( !this._authService.identity ) {
            this._router.navigate(["/"]);
        }
        this.title = "TimeLine";
        this.identity = this._authService.getIdentity();
        this.url = this._userService.url;
        _loadScripts.loadFiles(["icons/feather-icon/feather.min"]);
        _loadScripts.loadFiles(["icons/feather-icon/feather-icon"]);
        // _loadScripts.loadFiles(["owlcarousel/owl.carousel"]);
        _loadScripts.loadFiles(["owlcarousel/owl-custom"]);
    }

    ngOnInit() {
        //  this.cssUrl = '/assets/css/vendors/owlcarousel.css';
        console.log("Componente Social-App Cargado correctamente...");
        this.getPosts(this.page);
        this.getfollowers(this.page);
        this.getfollowings(this.page);
        this.getImages(this.page);
    }

    ngDoCheck() {
        // this.cssUrl = '/assets/css/vendors/owlcarousel.css';
        // this._loadScripts.loadFiles(["owlcarousel/owl.carousel"]);
        // this._loadScripts.loadFiles(["owlcarousel/owl-custom"]);    
    }

    // GET ALL POSTS 
    private getPosts( page, adding = false ) {
        this.userSubscription = this._postService.getPosts( page ).subscribe(
            // RESPUESTA
            // EN ESTE PUNTO EL RESPONSE ESTÁ LISTO PARA RECIBIR LOS DATOS DE LAS PUBLICACIONES POR PAGINADO.
            ( response ) => {
                if ( response.error ) {
                    this.status = "error";
                } else {
                    this.currentPage    = response.data.ResPostImages.currentPage;
                    this.totalItems     = response.data.ResPostImages.totalItems;
                    this.totalPages     = response.data.ResPostImages.totalPages;
                    this.limit          = response.data.ResPostImages.limit;
                    this.commentCounts  = response.data.ResPostImages.commentCounts;

                    // FECHAS
                    // EN ESTA PUNTO SE FORMATEA LAS FECHAS DE CADA PUBLICACIÓN.
                    moment.locale("es");
                    response.data.ResPostImages.posts.forEach(( element ) => {
                        element.created_at = moment( element.created_at )
                            .startOf("hour")
                            .fromNow();
                    });

                    // CONCATENAR
                    // EN ESTE PUNTO SE VERIFICA SI HAY SOLA UNA PUBLICACIOÓN O MÁS PARA IR AGREGANDO EN EL ARRAY DE PUBLICACIONES.
                    if ( !adding ) {
                        this.posts = response.data.ResPostImages.posts;
                        if ( this.posts.length == this.totalItems ) {
                            this.noMore = true;
                        }
                    } else {
                        var arrayA = this.posts;
                        var arrayB = response.data.ResPostImages.posts;
                        this.posts = arrayA.concat( arrayB );
                        if ( this.posts.length == this.totalItems ) {
                            this.noMore = true;
                        }

                        // SCROLL
                        // CUAANDO EL USUARIO QUIERE VER MÁS PUBLICACIONES, EL SCROLL BAJARÁ DE FORMA ANIMADA.
                        $("html, body").animate(
                            { scrollTop: $("body").prop("scrollHeight") },
                            200
                        );
                    }
                }
            },
            ( error ) => {
                console.log(error);
                this.status = "Error";
            }
        );
    }

    // GET ALL FOLLOWERS.
    private getfollowers( page:number ) {
        this.userSubscription = this._followService.getFollowers( page )
        .subscribe(
            ( response ) => {
                if ( response.error ) {
                    this.status = "Error";
                } else {
                    this.currentPage    = response.data.currentPage;
                    this.followers      = response.data.follows;
                    this.totalItems     = response.data.totalItems;
                    this.totalPages     = response.data.totalPages;
                }
            },
            ( error ) => {
                console.log(error);
                this.status = "Error";
            }
        )
    }

    // GET ALL FOLLOWINGS.
    private getfollowings( page:number ) {
        this.userSubscription = this._followService.getFollowings( page )
        .subscribe(
            ( response ) => {
                if ( response.error ) {
                    this.status = "Error";
                } else {
                    this.currentPage    = response.data.currentPage;
                    this.followings      = response.data.follows;
                    this.totalItems     = response.data.totalItems;
                    this.totalPages     = response.data.totalPages;
                }
            },
            ( error ) => {
                console.log(error);
                this.status = "Error";
            }
        )
    }

    // GET IMAGES
    private getImages( page:number ) {
        this.userSubscription = this._imagesService.getImages( page )
        .subscribe(
            ( response ) => {
                if ( response.error ) {
                    this.status = "Error";
                } else {
                    this.currentPage    = response.data.currentPage;
                    this.limit          = response.data.limit;
                    this.images         = response.data.posts;
                    this.totalItems     = response.data.totalItems;
                    this.totalPages     = response.data.totalPages;
                }
            },
            ( error ) => {
                console.log(error);
                this.status = "Error";
            }
        )
    }


    // VER MÁS PUBLICACIONES
    // ESTE METODO PERMITE VER MÁS PUBLICACIONES.
    public noMore = false;
    viewMore() {
        if (this.posts.length === this.totalItems) {
            this.noMore = true;
        } else {
            this.page += 1;
        }
        this.getPosts(this.page, true);
    }

    // REFRESCAR LAS PUBLICACIONE.
    refresh($event) {
        this.getPosts(0);
    }
}
