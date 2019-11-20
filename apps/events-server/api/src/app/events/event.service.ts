import {IEvent } from './event.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {
  // private eventRepository: any;
  //
  // constructor(eventRepository: any){
  //   this.eventRepository = eventRepository;
  // }

  getAllEvents(): IEvent[]{
    return [ { id: 3, title: 'test event', description: 'des', published:true } ];
  }

}
