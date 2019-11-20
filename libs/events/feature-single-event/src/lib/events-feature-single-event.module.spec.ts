import { async, TestBed } from '@angular/core/testing';
import { EventsFeatureSingleEventModule } from './events-feature-single-event.module';

describe('EventsFeatureSingleEventModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EventsFeatureSingleEventModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EventsFeatureSingleEventModule).toBeDefined();
  });
});
