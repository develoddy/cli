import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColRightComponent } from './col-right.component';

describe('ColRightComponent', () => {
  let component: ColRightComponent;
  let fixture: ComponentFixture<ColRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
