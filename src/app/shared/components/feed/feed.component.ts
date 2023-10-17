import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/actions';
import { combineLatest } from 'rxjs';
import { selectError, selectFeedData, selectIsLoading } from './store/reducers';
import { GetFeedResponseInterface } from './types/get-feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit{
  @Input() apiUrl : string = '';
  data$ = combineLatest({
    isLoading : this.store.select(selectIsLoading),
    error : this.store.select(selectError),
    feed : this.store.select(selectFeedData)
  });
  constructor(private store : Store){}
  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({url : this.apiUrl}));
  }
}
