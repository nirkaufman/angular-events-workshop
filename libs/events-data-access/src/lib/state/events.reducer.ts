import { EventsAction, EventsActionTypes } from './events.actions';
import {IEvent} from '@angular-events/interfaces';


export const EVENTS_FEATURE_KEY = 'events';

/**
 * Interface for the 'Events' data used in
 *  - EventsState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface EventsState {
  list: IEvent[]; // list of Events; analogous to a sql normalized table
  selectedId?: string | number; // which Events record has been selected
  loaded: boolean; // has the Events list been loaded
  error?: any; // last none error (if any)
}

export interface EventsPartialState {
  readonly [EVENTS_FEATURE_KEY]: EventsState;
}

export const initialState: EventsState = {
  list: [],
  loaded: false
};

export function reducer(
  state: EventsState = initialState,
  action: EventsAction
): EventsState {
  switch (action.type) {
    case EventsActionTypes.EventsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
