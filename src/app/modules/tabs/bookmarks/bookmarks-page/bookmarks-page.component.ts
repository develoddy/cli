import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'app/services/scripts/scripts.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bookmarks-page',
  templateUrl: './bookmarks-page.component.html',
  styleUrls: ['./bookmarks-page.component.css']
})
export class BookmarksPageComponent implements OnInit {

  public cssUrl: string;

  constructor(
    private _loadScripts: ScriptsService,
    public sanitizer: DomSanitizer, 
  ) { 
    this._loadScripts.loadFiles(["bookmark/custom"]);
    this._loadScripts.loadFiles(["bookmark/bootstrap.bundle.min"]);
    this._loadScripts.loadFiles(["bookmark/jquery.validate.min"]);
  }

  ngOnInit() {
    this.cssUrl = '/assets/css/style.css';
    this.cssUrl = '/assets/css/vendors/bootstrap.css';
  }

}
