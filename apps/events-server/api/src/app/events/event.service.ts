import { IEvent } from './event.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {
  private events: IEvent[] = [{
    id: 1,
    title: 'Event title',
    description: 'Event description',
    published: true
  }];

  getAllEvents() {
    return this.events;
  }

  createNewEvent(eventData: IEvent) {
    this.events.push(eventData);
  }

}
