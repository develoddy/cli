import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AuthenticationServiceService } from '@core/http/authentication-service.service';
import { ResEmitMessagesUser } from '@data/models/post';
import { UserService } from '@data/services/api/user.service';
import { MessagesService } from '@data/services/api/messages.service'; 
import { FollowService } from '@data/services/api/follow.service';
import { Message } from '@data/models/message';
import { ScriptsService } from 'app/services/scripts/scripts.service';
import * as moment from "moment";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // PROPERTIES
  public title: String;
  public user: ResEmitMessagesUser[];
  public identity;
  public token;
  public url: String;
  public status: String;
  public follows;
  public pages;
  public page: number;
  public next_page: number;
  public prev_page: number;
  public total;
  public message: Message;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _followService: FollowService,
    private _messageService: MessagesService,
    private _userService: UserService,
    private _auth: AuthenticationServiceService,
    private _loadScripts: ScriptsService
  ) { 
    _loadScripts.loadFiles(["editor/ckeditor/ckeditor"]);
    _loadScripts.loadFiles(["editor/ckeditor/adapters/jquery"]);
    _loadScripts.loadFiles(["email-app"]);
    _loadScripts.loadFiles(["tooltip-init"]);
    this.title = "Redactar Mensaje";
    this.identity = this._auth.getIdentity();
    this.url = this._userService.url;
    this.message = {
      _id: 0,
      content: "",
      user_id: 0,
      conversation_id: 0,
      created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      is_read: 0,
      conversationId: 0,
      userId: 0,
    };
  }

  ngOnInit() {
    console.log("El componente Add.Component está cargado correctamente.");
    this.actualPage();
    this.getMyFollow();
  }

  /**
   * 
   * @param form 
   */
  onSubmit(form) {
    var idConversation = Math.floor(Math.random() * 10000); //Math.floor(Math.random()*16777215).toString(16);
    this.message.conversationId = idConversation;
    this.message.userId = +this.message.userId;

    console.log(this.message);
    this._messageService.addMessages(this.message).subscribe(
      ( response ) => {
        if ( response ) {
          this.status = "success";
          form.reset();
        }
      },
      ( error ) => {
        this.status = "error";
        console.log(<any>error);
      }
    );
  }

  /**
   * 
   */
  getMyFollow() {
    this._followService.getMyFollows().subscribe(
      ( response ) => {
      console.log("GetMyFollow: ");
      console.log(response);
        this.follows = response.follows;
      },
      ( error ) => {
        console.log(<any>error);
      }
    );
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
        } else { }
      },
      ( error ) => {
        this.status = "Error";
        console.log(<any>error);
      }
    ); 
  }
}
