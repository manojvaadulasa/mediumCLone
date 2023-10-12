import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/action';
import { RegisterRequestInterface } from '../../type/registerRequest.interface';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducer';
import { combineLatest } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  form:FormGroup = new FormGroup({});
  constructor(private store:Store,private authService:AuthService){}
  data$ = combineLatest({
    isSubmitting : this.store.select(selectIsSubmitting),
    backendError : this.store.select(selectValidationErrors)
  });
  ngOnInit(): void {
    this.formInitializer();
  }
  formInitializer():void{
    this.form=new FormGroup({
      'username':new FormControl('',Validators.required),
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    });
  }
  onSubmit():void{
    const request : RegisterRequestInterface = {
      user: this.form.getRawValue()
    };
    this.store.dispatch(authActions.register({request}));
  }

}
