import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from "@core/http/authentication-service.service";
import { ImagesService } from "@data/services/api/images.service";
import { SpinnerServiceService } from "app/services/api/spinner-service.service";
import { UserService } from "@data/services/api/user.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { ScriptsService } from 'app/services/scripts/scripts.service';
import { DomSanitizer } from '@angular/platform-browser';
import {
    UserImages,
} from "@data/models/post";

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})
export class PhotosPageComponent implements OnInit {

  // PROPERTIES
  public title: string;
  public identity;
  public url;
  public page = 0;
  public limit = 0;
  public status;
  public userSubscription;
  public currentPage;
  public totalItems;
  public totalPages;
  public images: UserImages[];
  public cssUrl: string;

  constructor(
    private _imagesService  : ImagesService,
    private _authService    : AuthenticationServiceService,
    private _spinnerService : SpinnerServiceService,
    private _userService    : UserService,
    private _router         : Router,
    public sanitizer        : DomSanitizer, 
    private _route          : ActivatedRoute,
    private _loadScripts    : ScriptsService
  ) {
    this.title = "PHOTOS";
    if ( !this._authService.identity ) {
      this._router.navigate(["/"]);
    }
    this.identity = this._authService.getIdentity();
    this.url = this._userService.url;
    _loadScripts.loadFiles(["photoswipe/photoswipe-ui-default.min"]);
    _loadScripts.loadFiles(["photoswipe/photoswipe"]);
    _loadScripts.loadFiles(["photoswipe/photoswipe.min"]);
    _loadScripts.loadFiles(["scrollbar/simplebar"]);
    _loadScripts.loadFiles(["jquery-3.5.1.min"]);
    _loadScripts.loadFiles(["bootstrap/bootstrap.bundle.min"]);
    
  }

  ngOnInit() {
    this.cssUrl = '/assets/css/vendors/bootstrap.css';
    console.log("Componente Photos Cargado correctamente...");
    this.getImages(this.page);
  }

 
  /**
   * GET ALL IMAGES
   * @param page 
   * @param adding 
   */
  private getImages( page:number, adding = false  ) {
    this.userSubscription = this._imagesService.getImages( page )
    .subscribe(
      ( response ) => {
        if ( response.error ) {
          this.status = "Error";
        } else {
          this.currentPage    = response.data.currentPage;
          this.limit          = response.data.limit;
          this.totalItems     = response.data.totalItems;
          this.totalPages     = response.data.totalPages;

          // CONCATENAR
          if ( !adding ) {
            this.images = response.data.posts;
            if ( this.images.length == this.totalItems ) {
              this.noMore = true;
            }
          } else {
            var arrayA = this.images;
            var arrayB = response.data.posts;
            this.images = arrayA.concat( arrayB );
            if ( this.images.length == this.totalItems ) {
              this.noMore = true;
            }

            // SCROLL
            $("html, body").animate({ 
              scrollTop: $("body").prop("scrollHeight")
            }, 200 );
          }
        }  
      },
      ( error ) => {
        console.log(error);
        this.status = "Error";
      }
    );
  }


  /**
   * VIEW MORE.
   * ESTE METODO PERMITE VER MÁS FOTOS.
   */
  public noMore = false;
  viewMore() {
      if (this.images.length === this.totalItems) {
          this.noMore = true;
      } else {
          this.page += 1;
      }
      this.getImages(this.page, true);
  }
}