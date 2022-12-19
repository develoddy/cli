import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  // PROPERTIES
  public cssUrl: string;

  constructor(
    public sanitizer: DomSanitizer, 
  ) { }

  ngOnInit() {
    // this.cssUrl = '/assets/css/vendors/bootstrap.css';
  }

}
