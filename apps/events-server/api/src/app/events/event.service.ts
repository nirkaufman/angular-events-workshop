import { EventEntity, IEvent } from './event.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EventService {
  // private eventRepository: Repository<EventEntity>;
  //
  // constructor(
  //   @InjectRepository(EventEntity)eventRepository: Repository<EventEntity>) {
  //   this.eventRepository = eventRepository;
  // }

  getAllEvents() {
    return [{ title: "Event title" }]
    // return this.eventRepository.find();
  }

  createNewEvent(eventData: IEvent) {
    console.log(eventData);
    ;
  }

}
