import { Component, OnInit,DoCheck } from '@angular/core';
import { AuthenticationServiceService } from '@core/http/authentication-service.service';
import { UserService } from '@data/services/api/user.service';
import { ScriptsService } from 'app/services/scripts/scripts.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck {

  // == Properties
  public url;
  public identity;
  public latsname:string;
  public userconnect : boolean = false;
  public drop : boolean = true;
  public cssUrl: string;

  // == Constructor
  constructor(
    private auth: AuthenticationServiceService,
    private userService: UserService,
    private _loadScripts: ScriptsService,
    public sanitizer: DomSanitizer, 
  ) { 
    this.url = this.userService.url;
    this.identity = this.auth.getIdentity();
    _loadScripts.loadFiles(["script"]);
    _loadScripts.loadFiles(["icons/feather-icon/feather.min"]);
    _loadScripts.loadFiles(["icons/feather-icon/feather-icon"]);
  }

  ngOnInit() {
    // Se obtiene solo el nombre del objeto identity.
    // this.cssUrl = '/assets/css/vendors/bootstrap.css';
    if(this.identity) {
      this.userconnect = true;
      this.latsname =  this.identity.name.split(' ')[0];
    } 
    
  }

  // ESTE METODO ESTÁ PENDIENTE SI SE REALIZA ALGUN CAMBIO EN EL COMPONENTE
  // HEMOS CAMBIADO UN VALOR EN EL LOCAL STORARE CON LO CUAL SE MUESTRA EL NAVBAR
  ngDoCheck() {
    this._loadScripts.loadFiles(["script"]);
    // this.cssUrl = '/assets/css/vendors/bootstrap.css';
    this.identity = this.auth.getIdentity();
    this.drop = true;
  }

  dropp() {
    this.drop = true;
  }

  // Cerrar sessión
  logout() {
    this.auth.logout();
  }
}