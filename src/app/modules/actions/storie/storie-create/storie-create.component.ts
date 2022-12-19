import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'app/services/scripts/scripts.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-storie-create',
  templateUrl: './storie-create.component.html',
  styleUrls: ['./storie-create.component.css']
})
export class StorieCreateComponent implements OnInit {

  public cssUrl: string;

  constructor(
    private _loadScripts    : ScriptsService,
    public sanitizer: DomSanitizer, 
  ) { 
    // ssets/js/dropzone/dropzone-script.js
    this._loadScripts.loadFiles(["dropzone/dropzone"]);
    this._loadScripts.loadFiles(["dropzone/dropzone-script"]);
  }

  ngOnInit() {
    //this.cssUrl = '/assets/css/vendors/bootstrap.css';
    //this.cssUrl = '/assets/css/vendors/dropzone.css';
  }

  ngDoCheck() {
    // this.cssUrl = '/assets/css/vendors/dropzone.css';
    //this._loadScripts.loadFiles(["dropzone/dropzone"]);
    //this._loadScripts.loadFiles(["dropzone/dropzone-script"]);
  }

}
