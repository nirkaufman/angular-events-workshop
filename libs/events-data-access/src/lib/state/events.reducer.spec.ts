import { EventsLoaded } from './events.actions';
import { EventsState, Entity, initialState, reducer } from './events.reducer';

describe('Events Reducer', () => {
  const getEventsId = it => it['id'];
  let createEvents;

  beforeEach(() => {
    createEvents = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Events actions ', () => {
    it('should return set the list of known Events', () => {
      const eventss = [
        createEvents('PRODUCT-AAA'),
        createEvents('PRODUCT-zzz')
      ];
      const action = new EventsLoaded(eventss);
      const result: EventsState = reducer(initialState, action);
      const selId: string = getEventsId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
