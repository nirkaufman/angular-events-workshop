import { Component, OnInit } from '@angular/core';
import { EventsApiService } from '../../../../../events-data-access/src/lib/events-api.service';
import { Store } from '@ngrx/store';
import { eventsQuery, EventsState, LoadEvents } from '@angular-events/events-data-access';
import { Observable } from 'rxjs';



@Component({
  selector: 'angular-events-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  private store: Store<EventsState>;
  events: Observable<any>;

  constructor(store:Store<EventsState>) {
    this.store = store;
  }

  ngOnInit() {
    this.store.dispatch(new LoadEvents());
    this.events = this.store.select(eventsQuery.getAllEvents);
  }

}
