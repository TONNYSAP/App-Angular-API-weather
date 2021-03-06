import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStartComponent } from './message-start.component';

describe('MessageStartComponent', () => {
  let component: MessageStartComponent;
  let fixture: ComponentFixture<MessageStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
