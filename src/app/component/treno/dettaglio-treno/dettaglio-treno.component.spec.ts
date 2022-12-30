import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioTrenoComponent } from './dettaglio-treno.component';

describe('DettaglioTrenoComponent', () => {
  let component: DettaglioTrenoComponent;
  let fixture: ComponentFixture<DettaglioTrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioTrenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioTrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
