import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { EventsPartialState } from './events.reducer';
import {
  LoadEvents,
  EventsLoaded,
  EventsLoadError,
  EventsActionTypes
} from './events.actions';
import { EventsApiService } from '../events-api.service';

import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EventsEffects {

  @Effect()
  loadEvents$ = this.dataPersistence.fetch(
    EventsActionTypes.LoadEvents,
    {
      run: (action: LoadEvents, state: EventsPartialState) => {
        return this.eventApiService.getAllEvents().
            pipe(
             map( (response: any) => new EventsLoaded(response) )
           )
      },

      onError: (action: LoadEvents, error) => {
        console.error('Error', error);
        return new EventsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private eventApiService: EventsApiService,
    private dataPersistence: DataPersistence<EventsPartialState>
  ) {}
}
