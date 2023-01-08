import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTrenoComponent } from './chat-treno.component';

describe('DettaglioTrenoComponent', () => {
  let component: ChatTrenoComponent;
  let fixture: ComponentFixture<ChatTrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatTrenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatTrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
