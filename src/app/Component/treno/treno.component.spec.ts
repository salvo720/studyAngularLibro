import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenoComponent } from './treno.component';

describe('TrenoComponent', () => {
  let component: TrenoComponent;
  let fixture: ComponentFixture<TrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
