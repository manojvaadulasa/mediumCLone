import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { LoginRequestInterface } from '../../type/loginRequest.interface';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducer';
import { authActions } from '../../store/action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form:FormGroup = new FormGroup({});
  constructor(private store:Store){}
  data$ = combineLatest({
    isSubmitting : this.store.select(selectIsSubmitting),
    backendError : this.store.select(selectValidationErrors)
  });
  ngOnInit(): void {
    this.formInitializer();
  }
  formInitializer():void{
    this.form=new FormGroup({
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    });
  }
  onSubmit():void{
    const request : LoginRequestInterface = {
      user: this.form.getRawValue()
    };
    this.store.dispatch(authActions.login({request}));
  }
}
