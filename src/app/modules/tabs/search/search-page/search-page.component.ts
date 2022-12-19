import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'app/services/scripts/scripts.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  // PORPERTIES
  public cssUrl: string;

  constructor(
    private _loadScripts: ScriptsService,
    public sanitizer: DomSanitizer,
  ) {
    this._loadScripts.loadFiles(["photoswipe/photoswipe-ui-default.min"]);
    this._loadScripts.loadFiles(["photoswipe/photoswipe"]);
    this._loadScripts.loadFiles(["photoswipe/photoswipe.min"]);
    this._loadScripts.loadFiles(["scrollbar/simplebar"]);
    this._loadScripts.loadFiles(["jquery-3.5.1.min"]);
    this._loadScripts.loadFiles(["bootstrap/bootstrap.bundle.min"]);
  }

  ngOnInit() {
    // this.cssUrl = '/assets/css/vendors/bootstrap.css';
  }

}
