import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngComponent } from './testng.component';

describe('TestngComponent', () => {
  let component: TestngComponent;
  let fixture: ComponentFixture<TestngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
