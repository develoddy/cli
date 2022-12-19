import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ScriptsService } from 'app/services/scripts/scripts.service';

@Component({
  selector: 'app-modal-create-post',
  templateUrl: './modal-create-post.component.html',
  styleUrls: ['./modal-create-post.component.css']
})
export class ModalCreatePostComponent implements OnInit {

  public cssUrl: string;
  constructor(
    public sanitizer: DomSanitizer,
    private _loadScripts: ScriptsService 
  ) { 
    this._loadScripts.loadFiles(["script.js"]);
  }

  ngOnInit() {
    // this.cssUrl = '/assets/css/vendors/bootstrap.css';
  }

}
