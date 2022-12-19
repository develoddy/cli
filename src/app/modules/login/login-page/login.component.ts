import { Component, OnInit } from "@angular/core";
import { ScriptsService } from "app/services/scripts/scripts.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationServiceService } from "@core/http/authentication-service.service";
import { User } from "@data/models/post";
//import { User } from "@data/models/user";
import { UserService } from "@data/services/api/user.service";
import { SpinnerServiceService } from "app/services/api/spinner-service.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
	public textLogIn: boolean = true;
	public spinnerLogin: boolean = false;
	public title: string;
	public user: User = {
		id: 0,
		name: "",
		lastname: "",
		username: "",
		email: "",
		password: "",
		code: "",
		is_active: false,
		is_admin: false,
		created_at: "",
		updated_at: ""
	};
	public status: string;
	public identity;
	public token;
	public loginSubscription;
	private error;
	window: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private auth: AuthenticationServiceService,
		private _userService: UserService,
		private spinnerService: SpinnerServiceService,
		private _loadScripts: ScriptsService
	) {
		if (this.auth.getIdentity()) {
			this.router.navigate(["/home"]);
		}
		_loadScripts.loadFiles(["main"]);
		// <script src="assets/js/main.js"></script>
	}

	ngOnInit() {
		this.title = "Identificate";
		//this.user = new User(0, "", "", "", "", "", "", false, false, "", "");

		
	}

	onSubmit() {
		this.loginSubscription = this.auth.login(this.user).subscribe(
			response => {
				if (response.error) {
					this.textLogIn = !this.textLogIn;
					this.spinnerLogin = !this.spinnerLogin;
					setTimeout(() => {
						this.textLogIn = !this.textLogIn;
						this.spinnerLogin = !this.spinnerLogin;
						this.status = "error";
					}, 1000);
				} else {
					
						this.textLogIn = !this.textLogIn;
						this.spinnerLogin = !this.spinnerLogin;
						this.getCounters();
					
				}
			},
			error => {
				this.error = error;
			}
		);
	}

	getCounters() {
		this.loginSubscription = this._userService.getCounters().subscribe(
			response => {
				localStorage.setItem("stats", JSON.stringify(response));
				this.status = "success";
				//window.location.reload();
				setTimeout(() => {
					this.router.navigate(["/home"]);
				}, 1000);
			},
			error => {
				this.error = error;
			}
		);
	}

	//ON DESTROY
	ngOnDestroy(): void {
		if (this.loginSubscription) {
			this.loginSubscription.unsubscribe();
		}
	}
}

