import { NgModule }       from '@angular/core';
import { LoginComponent } from './login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'






@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: []
})

export class LoginModule {}