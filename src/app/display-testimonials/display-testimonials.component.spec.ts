import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTestimonialsComponent } from './display-testimonials.component';

describe('DisplayTestimonialsComponent', () => {
  let component: DisplayTestimonialsComponent;
  let fixture: ComponentFixture<DisplayTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
