import { Entity, EventsState } from './events.reducer';
import { eventsQuery } from './events.selectors';

describe('Events Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getEventsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createEvents = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      events: {
        list: [
          createEvents('PRODUCT-AAA'),
          createEvents('PRODUCT-BBB'),
          createEvents('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Events Selectors', () => {
    it('getAllEvents() should return the list of Events', () => {
      const results = eventsQuery.getAllEvents(storeState);
      const selId = getEventsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedEvents() should return the selected Entity', () => {
      const result = eventsQuery.getSelectedEvents(storeState);
      const selId = getEventsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = eventsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = eventsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
