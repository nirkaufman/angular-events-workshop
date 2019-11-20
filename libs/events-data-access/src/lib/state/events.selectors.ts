import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EVENTS_FEATURE_KEY, EventsState } from './events.reducer';

// Lookup the 'Events' feature state managed by NgRx
const getEventsState = createFeatureSelector<EventsState>(EVENTS_FEATURE_KEY);

const getLoaded = createSelector(
  getEventsState,
  (state: EventsState) => state.loaded
);
const getError = createSelector(
  getEventsState,
  (state: EventsState) => state.error
);

const getAllEvents = createSelector(
  getEventsState,
  getLoaded,
  (state: EventsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getEventsState,
  (state: EventsState) => state.selectedId
);
const getSelectedEvents = createSelector(
  getAllEvents,
  getSelectedId,
  (events, id) => {
    const result = events.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const eventsQuery = {
  getLoaded,
  getError,
  getAllEvents,
  getSelectedEvents
};
