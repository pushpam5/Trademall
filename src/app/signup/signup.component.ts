import {Component,OnInit} from '@angular/core'
import {FormGroup,FormBuilder,Validators,FormControl,NgForm} from '@angular/forms';
import {Router} from '@angular/router'
import {signupService} from './signup.component.service'


@Component({
    selector:'app-signup',
    templateUrl:'./signup.component.html',
    styles:['./signup.component.css']
})



export class SignupComponent implements OnInit{
    form: FormGroup;
    matchstatus=0;
    constructor(private formBuilder: FormBuilder,private router:Router,private signupService:signupService) {}
  
    ngOnInit() {
      this.form = this.formBuilder.group({
        name: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        country: [null, Validators.required],
        password:[null,Validators.required],
        confirmpassword:[null,Validators.required]
      });
    }
    onSubmit(Form:NgForm) {
        if (this.form.valid && this.passwordChecker(this.form)){
           this.signupService.onValidate(Form.value.name,Form.value.email,Form.value.country,Form.value.password)
           Form.resetForm();
        }
        else if(this.matchstatus==1){
          alert("Password Doesn't Match")
          this.matchstatus=0
          this.validateAllFormFields(this.form)
        }
         else {
            alert("Enter Correct Details")
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
    passwordChecker(formgroup:FormGroup){
      let pass=formgroup.controls.password.value;
      let pass1=formgroup.controls.confirmpassword.value;
        if(pass==pass1){
            return true
        }
        else{
          this.matchstatus=1
            return false
    
        }
    
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


}