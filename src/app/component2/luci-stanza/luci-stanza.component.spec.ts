import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuciStanzaComponent } from './luci-stanza.component';

describe('LuciStanzaComponent', () => {
  let component: LuciStanzaComponent;
  let fixture: ComponentFixture<LuciStanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuciStanzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuciStanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
