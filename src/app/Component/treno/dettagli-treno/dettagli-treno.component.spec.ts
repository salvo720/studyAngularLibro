import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliTrenoComponent } from './dettagli-treno.component';

describe('DettagliTrenoComponent', () => {
  let component: DettagliTrenoComponent;
  let fixture: ComponentFixture<DettagliTrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliTrenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliTrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
