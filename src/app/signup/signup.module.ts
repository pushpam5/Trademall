import { NgModule }       from '@angular/core';
import { SignupComponent } from './signup.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignupComponent,
  ],
  providers: []
})

export class SignupModule {}