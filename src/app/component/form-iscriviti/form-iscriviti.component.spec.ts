import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIscrivitiComponent } from './form-iscriviti.component';

describe('FormIscrivitiComponent', () => {
  let component: FormIscrivitiComponent;
  let fixture: ComponentFixture<FormIscrivitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIscrivitiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIscrivitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
