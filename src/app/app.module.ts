import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authFeatureKey, authReducer } from './auth/store/reducer';
import { EffectsModule } from '@ngrx/effects';
import * as authEffects from './auth/store/effects';
import * as feedEffects from './shared/components/feed/store/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { authInterceptor } from './shared/services/authInterceptor';
import { feedFeatureKey, feedReducer } from './shared/components/feed/store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true
    }),
    StoreModule.forFeature(authFeatureKey, authReducer),
    StoreModule.forFeature(feedFeatureKey, feedReducer),
    EffectsModule.forRoot([authEffects, feedEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
