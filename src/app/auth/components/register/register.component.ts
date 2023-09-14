import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/action';
import { RegisterRequestInterface } from '../../type/registerRequest.interface';
import { selectIsSubmitting } from '../../store/reducer';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  form:FormGroup = new FormGroup({});
  constructor(private store:Store,private authService:AuthService){}
  isSubmitting$ : Observable<boolean> = this.store.select(selectIsSubmitting)
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
    console.log('submit',this.form.value);
    const request : RegisterRequestInterface = {
      user: this.form.getRawValue()
    };
    this.store.dispatch(authActions.register({request}));
    this.authService.register(request).subscribe((res)=>console.log(res))
  }

}
