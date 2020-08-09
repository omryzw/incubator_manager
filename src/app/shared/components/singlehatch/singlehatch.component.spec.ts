import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglehatchComponent } from './singlehatch.component';

describe('SinglehatchComponent', () => {
  let component: SinglehatchComponent;
  let fixture: ComponentFixture<SinglehatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglehatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglehatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
