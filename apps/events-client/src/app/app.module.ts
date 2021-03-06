import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EventsDataAccessModule } from '@angular-events/events-data-access';

@NgModule({
  declarations: [AppComponent],
  imports: [
    EventsDataAccessModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'events-feature-list',
          loadChildren: () =>
            import('@angular-events/events/feature-list').then(
              module => module.EventsFeatureListModule
            )
        },
        {
          path: 'events-feature-single-event',
          loadChildren: () =>
            import('@angular-events/events/feature-single-event').then(
              module => module.EventsFeatureSingleEventModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
