import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private store: Store){}

  public ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser());
  }

}
