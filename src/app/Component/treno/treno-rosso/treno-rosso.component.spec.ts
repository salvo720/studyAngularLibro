import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenoRossoComponent } from './treno-rosso.component';

describe('TrenoRossoComponent', () => {
  let component: TrenoRossoComponent;
  let fixture: ComponentFixture<TrenoRossoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenoRossoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrenoRossoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
