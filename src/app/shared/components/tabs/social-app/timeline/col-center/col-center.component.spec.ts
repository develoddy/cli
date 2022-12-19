import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColCenterComponent } from './col-center.component';

describe('ColCenterComponent', () => {
  let component: ColCenterComponent;
  let fixture: ComponentFixture<ColCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
