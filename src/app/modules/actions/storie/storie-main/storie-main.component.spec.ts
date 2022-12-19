import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorieMainComponent } from './storie-main.component';

describe('StorieMainComponent', () => {
  let component: StorieMainComponent;
  let fixture: ComponentFixture<StorieMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorieMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorieMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
