import { EventService } from './event.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  createEvent(@Body() eventData: IEvent) {
    this.eventService.createNewEvent(eventData);
  }

}
