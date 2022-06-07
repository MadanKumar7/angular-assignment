import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLogDisplayComponent } from './counter-log-display.component';

describe('CounterLogDisplayComponent', () => {
  let component: CounterLogDisplayComponent;
  let fixture: ComponentFixture<CounterLogDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterLogDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterLogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
