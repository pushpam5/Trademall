import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {ToastrService} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {Router,ActivatedRoute} from '@angular/router'
@Injectable({providedIn:'root'})

export class signupService{
     constructor(private http:HttpClient,
                private toastr:ToastrService,
                private router:Router){}

    onValidate(name:string,email:string,country:string,password:string){
        let details={name:name,email:email,country:country,password:password};
        this.http.post('http://localhost:8080/api/signup',details)
        .subscribe(responseData=>{
            console.log(responseData);
            this.toastr.success("Account Created Successfully")
            this.router.navigate['/'];
        },error=>{
            const Error=error
            this.toastr.error(Error.error.message)
        })  
    this.sendMail(email)
    }
    sendMail(email:string){
        const details={
            email:email,
            message:"Welcome to Trademall.Enjoy Shopping with Trademall and get exicting offers and cashbacks!!!!!"
        }
        console.log(details)
        this.http.post('http://localhost:8080/api/responsemail/subscribe',details)
        .subscribe(ResponseData=>{
            console.log(ResponseData)
        },error=>{
            console.log("Error Occured")
        })
    }

}