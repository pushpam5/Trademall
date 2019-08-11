import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {loginService} from '../login/login.component.service'

@Injectable({providedIn:'root'})

export class checkoutService{
  
    constructor(private http:HttpClient,
                private toastr:ToastrService,
                private loginService:loginService){}
   
    onValidate(email:string,password:string){
        
        let details={email:email,password:password};
        console.log(details)
        this.loginService.onValidate(details.email,details.password)
     
    }
    onValidateAdd(firstname:string,lastname:string,email:string,address:string,country:string,state:string,city:string){

        let details={firstname:firstname,lastname:lastname,email:email,address:address,country:country,state:state,city:city,token:this.loginService.onadddelivery()}
        console.log(details)
        this.http.post('http://localhost:8080/api/deliveryadd',details)
        .subscribe(ResponseData=>{
            console.log(ResponseData);
            this.toastr.success("Details Added Successfully")
        },error=>{
            const Error=error;
            console.log(Error.error.message)
            this.toastr.error(Error.error.message)
               
        }
        )
    }
    onLoggedIn(){
     return this.loginService.onaccess();   
    }
}