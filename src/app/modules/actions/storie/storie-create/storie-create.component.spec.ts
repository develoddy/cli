import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorieCreateComponent } from './storie-create.component';

describe('StorieCreateComponent', () => {
  let component: StorieCreateComponent;
  let fixture: ComponentFixture<StorieCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorieCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
