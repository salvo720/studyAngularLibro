import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIscrivitiReactiveComponent } from './form-iscriviti-reactive.component';

describe('FormIscrivitiReactiveComponent', () => {
  let component: FormIscrivitiReactiveComponent;
  let fixture: ComponentFixture<FormIscrivitiReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIscrivitiReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIscrivitiReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
