import {IEvent } from './event.entity';

export class EventService {
  private eventRepository: any;

  constructor(eventRepository: any){
    this.eventRepository = eventRepository;
  }

  getAllEvents(): IEvent[]{
    const events = this.eventRepository.all();
    //  do something events
    return events;
  }

}
