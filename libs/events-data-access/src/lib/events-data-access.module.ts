import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEvents from './state/events.reducer';
import { EventsEffects } from './state/events.effects';
import { EventsApiService } from './events-api.service';
import { HttpClientModule } from '@angular/common/http';
import { DataPersistence } from '@nrwl/angular';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromEvents.EVENTS_FEATURE_KEY, fromEvents.reducer),
    EffectsModule.forFeature([EventsEffects])
  ],
  providers: [EventsApiService, DataPersistence]
})
export class EventsDataAccessModule {}
