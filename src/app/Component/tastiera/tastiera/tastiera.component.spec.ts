import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastieraComponent } from './tastiera.component';

describe('TastieraComponent', () => {
  let component: TastieraComponent;
  let fixture: ComponentFixture<TastieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastieraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TastieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
