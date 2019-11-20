import { EventEntity } from './event.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IEvent } from '@angular-events/interfaces';

@Injectable()
export class EventService {
  private eventRepository: Repository<EventEntity>;

  constructor(@InjectRepository(EventEntity) eventRepository: Repository<EventEntity>){
    this.eventRepository = eventRepository;
  }

  getAllEvents(): Promise<IEvent[]> {
    return this.eventRepository.find();
  }

  getById(eventId: number): Promise<IEvent> {
    return this.eventRepository.findOne({where: {id: eventId}})
  }

  createNewEvent(eventData: IEvent): Promise<IEvent> {
    const event = this.eventRepository.create(eventData);
    return this.eventRepository.save(event);
  }
}
