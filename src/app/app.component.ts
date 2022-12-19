import { Component, OnInit, DoCheck} from '@angular/core';
import { AuthenticationServiceService } from '@core/http/authentication-service.service';
import { Post, Profile, User } from '@data/models/post';
import { UserService } from '@data/services/api/user.service';
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck  {

 // Properties
 public url;
 public identity;
 public latsname:string;
 public userconnect : boolean = false;
 public drop : boolean = true;
 public post: Post;
 public profile: Profile;
 public user: User;

 //Constructor
 constructor(
   private auth: AuthenticationServiceService,
   private userService: UserService
   
 ) { 
   this.url = this.userService.url;
   this.identity = this.auth.getIdentity();
 }

 ngOnInit() {
   // GET NAME OBJECT IDENTITY
   console.log("se carga el componente app.componente.");

   var id = this.identity.id;
   if(this.identity) {
     this.userconnect = true;
     this.latsname =  this.identity.name.split(' ')[0];
   } 

   this.user  = { id:0, name: "", lastname: "", username: "", email: "", password: "", code: "", is_active: false, is_admin: false, created_at: moment().format("YYYY-MM-DD HH:mm:ss"), updated_at: "2021-12-26 22:47:23"};
   this.profile = { image_header: "", bio: "" };
   this.post  = { id: 0, content: moment().format("YYYY-MM-DD HH:mm:ss"), created_at: "2021-12-26 22:47:23", userId:  id, user: this.user, comments:[] };
 }

 // ESTE METODO ESTÁ PENDIENTE SI SE REALIZA ALGUN CAMBIO EN EL COMPONENTE
 // HEMOS CAMBIADO UN VALOR EN EL LOCAL STORARE CON LO CUAL SE MUESTRA EL NAVBAR
 ngDoCheck() {
   this.identity = this.auth.getIdentity();
   this.drop = true;
 }

 // Cerrar sessión
 logout() {
  alert("cerrar sesion....");
   this.auth.logout();
 }
 onSubmit() {
  console.log("app.componente: onSubmit()");
  console.log(this.post);
  
  
 }

}
