import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAppPageComponent } from './social-app-page.component';

describe('SocialAppPageComponent', () => {
  let component: SocialAppPageComponent;
  let fixture: ComponentFixture<SocialAppPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAppPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
