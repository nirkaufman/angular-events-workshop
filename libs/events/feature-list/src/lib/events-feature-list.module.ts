import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { SharedUiModule } from '@angular-events/shared-ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: EventListComponent}
    ])
  ],
  declarations: [EventListComponent]
})
export class EventsFeatureListModule {}
