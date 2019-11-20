import { async, TestBed } from '@angular/core/testing';
import { EventsFeatureListModule } from './events-feature-list.module';

describe('EventsFeatureListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EventsFeatureListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EventsFeatureListModule).toBeDefined();
  });
});
