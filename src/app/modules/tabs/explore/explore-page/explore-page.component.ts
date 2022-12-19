import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'app/services/scripts/scripts.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit {

  public cssUrl: string;

  constructor(
    private _loadScripts: ScriptsService,
    public sanitizer: DomSanitizer, 
  ) {
    this._loadScripts.loadFiles(["animation/aos/aos-init"]);
    this._loadScripts.loadFiles(["animation/aos/aos"]);
    this._loadScripts.loadFiles(["isotope.pkgd"]);
  }

  ngOnInit() {
    this.cssUrl = '/assets/css/vendors/aos.css';
  }

  ngDoCheck() {
    // this.cssUrl = '/assets/css/vendors/aos.css';
    // this._loadScripts.loadFiles(["animation/aos/aos-init"]);
    // this._loadScripts.loadFiles(["animation/aos/aos"]);
    // this._loadScripts.loadFiles(["isotope.pkgd"]);
  }

}
