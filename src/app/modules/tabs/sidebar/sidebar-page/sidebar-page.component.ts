import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationServiceService } from '@core/http/authentication-service.service';
import { ScriptsService } from 'app/services/scripts/scripts.service';
import * as $ from "jquery";

@Component({
  selector: 'app-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.css']
})
export class SidebarPageComponent implements OnInit {

  public cssUrl: string;
  public identity;
  adminValid: boolean = false;

  constructor( 
    private auth: AuthenticationServiceService,
    public sanitizer: DomSanitizer, 
    private _loadScripts: ScriptsService ) { 

        this.identity = this.auth.getIdentity();
        this._loadScripts.loadFiles(["sidebar-menu"]);
        /*_loadScripts.loadFiles(["jquery-3.5.1.min.js"]);
        _loadScripts.loadFiles(["bootstrap/bootstrap.bundle.min.js"]);
        _loadScripts.loadFiles(["icons/feather-icon/feather.min.js"]);
        _loadScripts.loadFiles(["scrollbar/simplebar.js"]);
        _loadScripts.loadFiles(["scrollbar/custom.js"]);
        _loadScripts.loadFiles(["photoswipe/photoswipe.min.js"]);
        _loadScripts.loadFiles(["photoswipe/photoswipe-ui-default.min.js"]);
        _loadScripts.loadFiles(["photoswipe/photoswipe.js"]);
        _loadScripts.loadFiles(["script.js"]);
        _loadScripts.loadFiles(["theme-customizer/customizer.js"]);*/
    }

  ngOnInit() {
    // this.cssUrl = '/assets/css/style.css';
    // this.cssUrl = '/assets/css/vendors/bootstrap.css';
    /*this.cssUrl = 'assets/css/responsive.css';
    this.cssUrl = 'assets/css/color-1.css';
    this.cssUrl = 'assets/css/vendors/bootstrap.css';
    this.cssUrl = 'assets/css/vendors/photoswipe.css';
    this.cssUrl = 'assets/css/vendors/scrollbar.css';
    this.cssUrl = 'assets/css/vendors/flag-icon.css';
    this.cssUrl = 'assets/css/vendors/themify.css';
    this.cssUrl = 'assets/css/vendors/icofont.css';
    this.cssUrl = 'assets/css/font-awesome.css';*/

    if( this.identity.username == "eddylujan" ) {
      // Si es el admin.
      this.adminValid = true;
    } else {
      // No es el admin.
      this.adminValid = false;
    }
  }
}
