import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTipiDifferentiComponent } from './observable-tipi-differenti.component';

describe('ObservableTipiDifferentiComponent', () => {
  let component: ObservableTipiDifferentiComponent;
  let fixture: ComponentFixture<ObservableTipiDifferentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableTipiDifferentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableTipiDifferentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
