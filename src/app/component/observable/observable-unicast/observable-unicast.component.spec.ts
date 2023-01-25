import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableUnicastComponent } from './observable-unicast.component';

describe('ObservableUnicastComponent', () => {
  let component: ObservableUnicastComponent;
  let fixture: ComponentFixture<ObservableUnicastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableUnicastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableUnicastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
