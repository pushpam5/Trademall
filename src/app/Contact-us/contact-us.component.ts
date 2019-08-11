import {Component,OnInit} from '@angular/core'
import {FormGroup,Validators,FormBuilder,NgForm} from '@angular/forms'
import {ToastrService} from 'ngx-toastr'
import {HttpClient} from '@angular/common/http'
@Component({
    selector:'app-contact-us',
    templateUrl:'./contact-us.component.html',
    styleUrls:['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
    form:FormGroup
    validate=0
    constructor(private formbuilder:FormBuilder,
                private toastr:ToastrService,
                private http:HttpClient){

    }
    
    ngOnInit(){
        this.form=this.formbuilder.group({
            email:[null,[Validators.required,Validators.email]],
            message:[null,Validators.required],
            subject:[null,Validators.required]

        })
    

    }
    OnSubmit(form:NgForm) {
        if (this.form.valid) {
            this.validate=0
            const details={
                email:form.value.email,
                subject:form.value.subject,
                message:form.value.message
            }
            console.log(details.email)
            this.http.post('http://localhost:8080/api/responsemail',details)
            .subscribe(ResponseData=>{
                console.log(ResponseData)
            },error=>{
                console.log("Error Occured")
            })
            this.toastr.success('Message Sent');
            this.form.reset();
        } else {
            
            this.validate=1;
        }
      }

}