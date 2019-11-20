import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { EventsEffects } from './events.effects';
import { LoadEvents, EventsLoaded } from './events.actions';

describe('EventsEffects', () => {
  let actions: Observable<any>;
  let effects: EventsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        EventsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(EventsEffects);
  });

  describe('loadEvents$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadEvents() });
      expect(effects.loadEvents$).toBeObservable(
        hot('-a-|', { a: new EventsLoaded([]) })
      );
    });
  });
});
