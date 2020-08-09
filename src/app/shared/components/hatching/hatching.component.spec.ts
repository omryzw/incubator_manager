import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatchingComponent } from './hatching.component';

describe('HatchingComponent', () => {
  let component: HatchingComponent;
  let fixture: ComponentFixture<HatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
