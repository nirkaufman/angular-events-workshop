import { Action } from '@ngrx/store';
import { Entity } from './events.reducer';

export enum EventsActionTypes {
  LoadEvents = '[Events] Load Events',
  EventsLoaded = '[Events] Events Loaded',
  EventsLoadError = '[Events] Events Load Error'
}

export class LoadEvents implements Action {
  readonly type = EventsActionTypes.LoadEvents;
}

export class EventsLoadError implements Action {
  readonly type = EventsActionTypes.EventsLoadError;
  constructor(public payload: any) {}
}

export class EventsLoaded implements Action {
  readonly type = EventsActionTypes.EventsLoaded;
  constructor(public payload: Entity[]) {}
}

export type EventsAction = LoadEvents | EventsLoaded | EventsLoadError;

export const fromEventsActions = {
  LoadEvents,
  EventsLoaded,
  EventsLoadError
};
