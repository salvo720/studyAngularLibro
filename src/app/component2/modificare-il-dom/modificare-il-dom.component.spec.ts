import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificareIlDomComponent } from './modificare-il-dom.component';

describe('ModificareIlDomComponent', () => {
  let component: ModificareIlDomComponent;
  let fixture: ComponentFixture<ModificareIlDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificareIlDomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificareIlDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
