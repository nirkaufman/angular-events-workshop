import { EventService } from './event.service';
import { Controller, Get } from '@nestjs/common';
import { IEvent } from './event.entity';

@Controller('events')
export class EventController {
  private eventService: EventService;

  constructor(eventService: EventService) {
    this.eventService = eventService;
  }

  @Get()
  all(): IEvent[] {
    return this.eventService.getAllEvents();
  }

}
