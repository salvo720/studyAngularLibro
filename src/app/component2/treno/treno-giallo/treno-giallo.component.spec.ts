import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenoGialloComponent } from './treno-giallo.component';

describe('TrenoGialloComponent', () => {
  let component: TrenoGialloComponent;
  let fixture: ComponentFixture<TrenoGialloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenoGialloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrenoGialloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
