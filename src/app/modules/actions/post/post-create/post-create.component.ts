import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '@core/http/authentication-service.service';
import { Post, Profile, User } from '@data/models/post';
import { ScriptsService } from 'app/services/scripts/scripts.service';
import * as moment from "moment";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  // PROPETIES
  public user : User;
  public profile : Profile; 
  public post: Post;
  public identity;

  constructor(
    private _loadScripts: ScriptsService,
    private _auth: AuthenticationServiceService,
  ) { 
    this._loadScripts.loadFiles(["editor/ckeditor/ckeditor"]);
    this._loadScripts.loadFiles(["editor/ckeditor/adapters/jquery"]);
    this._loadScripts.loadFiles(["email-app"]);
    this._loadScripts.loadFiles(["tooltip-init"]);
    this.identity = this._auth.getIdentity();
  }

  ngOnInit() {
    // Id identity
    var id = this.identity.id;
    this.user  = { id:0, name: "", lastname: "", username: "", email: "", password: "", code: "", is_active: false, is_admin: false, created_at: moment().format("YYYY-MM-DD HH:mm:ss"), updated_at: "2021-12-26 22:47:23"};
    this.profile = { image_header: "", bio: "" };
    this.post  = { id: 0, content: "", created_at: "2021-12-26 22:47:23", userId:  id, user: this.user, comments:[] };
    // this.post  = { id: 0, content: "", created_at: "2021-12-26 22:47:23", userId:  id, user: this.user, comments:[] };
  }

  onSubmit() {
    console.log("post-create.componente: ");
    console.log(this.post);
}

}
