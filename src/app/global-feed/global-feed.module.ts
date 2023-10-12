import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFeedRoutingModule } from './global-feed-routing.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { FeedComponent } from '../shared/components/feed/feed.component';

@NgModule({
  declarations: [
    GlobalFeedComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    GlobalFeedRoutingModule
  ]
})
export class GlobalFeedModule { }
