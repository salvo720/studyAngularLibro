import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMetroComponent } from './lista-metro.component';

describe('ListaMetroComponent', () => {
  let component: ListaMetroComponent;
  let fixture: ComponentFixture<ListaMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
