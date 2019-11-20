import { EventService } from './event.service';

export class EventController {
  private eventService: EventService;

  constructor(eventService: EventService) {
    this.eventService = eventService;
  }

  all() {
    this.eventService.getAllEvents();
  }

}
