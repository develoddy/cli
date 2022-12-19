import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPagesComponent } from './about-pages.component';

describe('AboutPagesComponent', () => {
  let component: AboutPagesComponent;
  let fixture: ComponentFixture<AboutPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
