import { async, TestBed } from '@angular/core/testing';
import { EventsDataAccessModule } from './events-data-access.module';

describe('EventsDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EventsDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EventsDataAccessModule).toBeDefined();
  });
});
