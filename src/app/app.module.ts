import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { authFeatureKey, authReducer } from './auth/store/reducer';
import { EffectsModule } from '@ngrx/effects';
import * as authEffects from './auth/store/effects';

@NgModule({
  declarations: [
    AppComponent
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
    EffectsModule.forRoot([authEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
