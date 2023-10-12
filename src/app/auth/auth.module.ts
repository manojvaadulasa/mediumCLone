import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BackenderrormessageComponent } from '../shared/components/backenderrormessage/backenderrormessage.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    BackenderrormessageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
