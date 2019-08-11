import {Component,OnInit} from '@angular/core'
import {FormGroup,FormBuilder,Validators, NgForm,FormControl} from '@angular/forms'
import {Router } from '@angular/router'

import {loginService} from './login.component.service'

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styles:['./login.component.css']
})
export class LoginComponent implements OnInit{

    form: FormGroup;
    constructor(private formBuilder: FormBuilder,private router:Router,private loginService:loginService){

    }
    
    ngOnInit(){
        this.form=this.formBuilder.group({
            email:[null,[Validators.required,Validators.email]],
            password:[null,Validators.required,]
          
        });

    }
    onSubmit(form:NgForm) {
        if (this.form.valid) {
          this.loginService.onValidate(form.value.email,form.value.password)
          
          form.resetForm();
          
        } else {
           // alert("Enter Correct Credentials")
            
            this.validateAllFormFields(this.form)

        }
      }

    isFieldValid(field: string) {
        return !this.form.get(field).valid && this.form.get(field).touched;
      }
      
      displayFieldCss(field: string) {
        return {
          'has-error': this.isFieldValid(field),
          'has-feedback': this.isFieldValid(field)
        };
}
reset(){
  this.form.reset();
}
validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}
googleLogin(){
  this.loginService.googleLogin();
}

}