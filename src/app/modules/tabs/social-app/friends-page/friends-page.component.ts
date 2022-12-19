import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthenticationServiceService } from '@core/http/authentication-service.service';
import { Follow, ResUsers__, ResUsers__user, User } from '@data/models/post';
import { FollowService } from '@data/services/api/follow.service';
import { UserService } from '@data/services/api/user.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {

  // PROPERTIES
	public userSubscription;
	public page: number;
	public next_page: number;
	public prev_page: number;
	public total;
	public pages;
	public status: string;
	public users: User[];
  public resUsers__user: ResUsers__user[];
  public following_arr = [];
	public followed_arr = [];
	public error;
  
  @Input() identity;
	@Input() stats;
  @Input() resUserFollow: ResUsers__;

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

  /*
    - ---------------- PAGINATION ----------------
    - Actual Page
    - Description: Se localiza el actual pagination.
    -
  **/
  private actualPage() {
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

  /*
	  - ---------------- GET DATA USERS ----------------
	  - SE RECUPERA TODO LOS DATOS DE LOS USUARIOS
	  - 
  **/
  private getUsers(page: number) {
		this.userSubscription = this._userService.getAllUsers(page).subscribe(
			response => {
				if ( !response.data ) {
					this.status = "error";
				} else {
					this.resUserFollow  = response.data;
					this.total          = this.resUserFollow.res_users.totalItems;
					this.resUsers__user = this.resUserFollow.res_users.profiles;
					this.pages          = this.resUserFollow.res_users.totalPages;
					this.following_arr  = this.resUserFollow.users_following;

					if ( page > this.pages ) {
						setTimeout(() => {
							this._route.navigate(["/friends", 1]);
						});
					}
				}
			},
			error => {
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
			response => {
				if (!response.data) {
					this.status = "error";
				} else {
					this.status = "success";
					this.following_arr.push(followed_id); // Guarda el id del usuario que acabo de seguir.
				}
			},
			error => {
				this.error = error;
			}
		);
	}

	/**
	 * name
	 */
	public unfollowUser(followed_id: number) {
		this._folloService.deleteFollow(followed_id).subscribe(
			response => {
				var search = this.following_arr.indexOf(followed_id);
				if (search != -1) {
					this.following_arr.splice(search, 1); // Borra el elemento que ha encontrado.
				}
			},
			error => {
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
