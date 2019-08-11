import {Component,OnInit} from '@angular/core'
import {FormBuilder,FormGroup,Validators,FormControl, NgForm} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {Response} from '@angular/http'
import {Router,ActivatedRoute} from '@angular/router'
import {ToastrService} from 'ngx-toastr'


import {checkoutService} from './checkout.component.service'

@Component({
    selector:'app-checkout',
    templateUrl:'checkout.component.html',
    styleUrls:['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

   count:number=0
    loginform:FormGroup
    deladdform:FormGroup    
    
    constructor(private http:HttpClient,
        private formBuilder:FormBuilder,
        private checkoutService:checkoutService,
        private router:Router,
        private toastr:ToastrService){}

        details=[];
        citdetails=[];
        coudetails=[];
       // location:any={};
        //address:any={};
       // automate:boolean=false;

      country=this.http.get('http://localhost:8080/api/countries')
              .subscribe((response:Response)=>{
                this.coudetails.push(response)
              })
              //For showing cities Dropdown
      selectCountry(event:any){
        this.details.splice(0);
        const id=event.target.value
        const Id={
          id:id
        }
        this.http.post('http://localhost:8080/api/fetchstates',Id)
          .subscribe((response:Response)=>{
                this.details.push(response)
          },error=>{
            console.log("Error")
          })

      }
      // fetchLocation(event:any) {
      //   if(this.count==0){
      //     this.count=1;
      //     console.log(this.automate)
      //     this.automate=true;
      //     this.http.get('http://api.ipstack.com/27.7.248.83?access_key=86eaaeb86ed82ceacf24f0a58aca41b9')
      //     .subscribe(ResponseData=>{
      //         this.location=ResponseData
      //         this.address={
      //             country:this.location.country_name,
      //             state:this.location.region_name,
      //             city:this.location.city,
      //             zip:this.location.zip
      //         }
      //         this.http.post('http://localhost:8080/api/autofilldetails',this.address)
      //         .subscribe(ResponseData=>{
      //           console.log(ResponseData)
      //         },error=>{
      //           console.log(error)
      //         })
      //       }
      //     ,error=>{
      //         console.log(error)
      //     })
      //     //console.log("location:" +this.location)

      //   }
      //   else{
      //     this.count=0;
      //     this.automate=false;
      //     console.log(!event.target.value)

      //   }

        
      // }

        onLoggedIn(){
           return this.checkoutService.onLoggedIn();
        }

        logonSubmit(logform:NgForm){
            if (this.loginform.valid) {
              
              ;
                this.checkoutService.onValidate(logform.value.email,logform.value.password)
                
                logform.resetForm();
                
              } else {
                  this.validateAllFormFields(this.loginform)
               }
        }
        deladdonSubmit(addform:NgForm){
             if(this.deladdform.valid){
                this.checkoutService.onValidateAdd(addform.value.firstname,addform.value.lastname,addform.value.email,addform.value.address,addform.value.country,addform.value.state,addform.value.city)
                addform.resetForm();
                
            }
            else{
                this.toastr.warning("Please Fill Required Fields");
                this.validateAllFormFields(this.deladdform)
            }

        }


        ngOnInit(){
        this.loginform=this.formBuilder.group({
            email:[null,[Validators.required,Validators.email]],
            password:[null,[Validators.required,Validators.pattern(/^([a-zA-Z0-9@*#]{8,15})$/)]]
        })
        this.deladdform=this.formBuilder.group({
            firstname:[null,Validators.required],
            lastname:[null,Validators.required],
            email:[null,[Validators.required,Validators.email]],
            address:[null,Validators.required],
            country:['',Validators.required],
            state:['',Validators.required],
            city:['',Validators.required],
            zip:[null,[Validators.required,Validators.minLength(6)]]

        })
       
    }
    
    selectState(event:any){
      this.citdetails.splice(0);
            const id=event.target.value;
            const Id={
                id:id
            }
          
            this.http.post('http://localhost:8080/api/fetchcities',Id)
            .subscribe((response:Response)=>{
                 this.citdetails.push(response)
                 if(this.citdetails[0][0]==null)
                 {
                   this.toastr.info("No City Found");
                  
                  }
                 }, 
            error=>{
                console.log("Error");
            })
            
    }
    isdelFieldValid(field: string) {
      return !this.deladdform.get(field).valid && this.deladdform.get(field).touched;
    }
    
    isFieldValid(field: string) {
        return !this.loginform.get(field).valid && this.loginform.get(field).touched;
      }
    displayFieldCss(field: string) {
        return {
          'has-error': this.isFieldValid(field),
          'has-feedback': this.isFieldValid(field)
        };
      }
      displaydelFieldCss(field: string) {
          return {
            'has-error': this.isdelFieldValid(field),
            'has-feedback': this.isdelFieldValid(field)
          };
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
    