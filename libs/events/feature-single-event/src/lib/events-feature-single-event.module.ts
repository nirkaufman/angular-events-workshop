import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventCardComponent } from './event-card/event-card.component';
import { SharedUiModule } from '@angular-events/shared-ui';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: EventCardComponent }
    ]),
    SharedUiModule
  ],
  declarations: [EventCardComponent],
  exports: [EventCardComponent]
})
export class EventsFeatureSingleEventModule {}
