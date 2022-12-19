import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AuthenticationServiceService } from '@core/http/authentication-service.service';
import { ResEmitMessagesUser } from '@data/models/post';
import { UserService } from '@data/services/api/user.service';
import { MessagesService } from '@data/services/api/messages.service'; 
import { FollowService } from '@data/services/api/follow.service';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {
  
  // PROPERTIES
  public title: String;
  public user: ResEmitMessagesUser[];
  public identity;
  public token;
  public url: String;
  public status: String;
  public follow;
  public pages;
  public page: number;
  public next_page: number;
  public prev_page: number;
  public total;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _followService: FollowService,
    private _messageService: MessagesService,
    private _userService: UserService,
    private _auth: AuthenticationServiceService
  ) { 
    this.title = "Mensajes Recibidos";
    this.identity = this._auth.getIdentity();
    this.url = this._userService.url;
  }

  ngOnInit() {
    console.log("Received.Component");
    this.actualPage();
  }

  /**
   * ACTUAL PAGE
   */
  actualPage() {
		this._route.paramMap.subscribe((params: ParamMap) => {
			let page = +params.get("page");
			this.page = page;
			
			if ( !page ) {
				page = 0;
				this.next_page = page + 1;
				this.prev_page = page - 1;
			} else {
				this.next_page = page + 1;
				this.prev_page = page - 1;
				if ( this.prev_page <= 0 ) {
					this.prev_page = 0;
				}
			}
			this.getMessages(page);
		});
	}

  /**
   * GET MESSAGES
   * @param page 
   */
  getMessages(page: number) {
    this._messageService.getMyMessages(page).subscribe(
      ( response ) => {
          if ( response ) {
              this.user   = response.user;
              this.total 	= response.totalItems;
              this.pages 	= response.totalPages;
          } else {
          }
      },
      ( error ) => {
        this.status = "Error";
          console.log(<any>error);
      }
    ); 
  }
}