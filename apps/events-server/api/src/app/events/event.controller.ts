import { EventService } from './event.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IEvent } from '@angular-events/interfaces';

@Controller('events')
export class EventController {
  private eventService: EventService;

  constructor(eventService: EventService) {
    this.eventService = eventService;
  }

  @Get()
  all(): Promise<IEvent[]> {
    return this.eventService.getAllEvents();
  }

  @Get(':id')
  getEventById(@Param('id') eventId: number): Promise<IEvent> {
    return this.eventService.getById(eventId);
  }

  @Post()
  createEvent(@Body() eventData: IEvent): Promise<IEvent> {
    return this.eventService.createNewEvent(eventData);
  }

}
