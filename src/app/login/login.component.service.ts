import {Injectable} from '@angular/core'
import {HttpClient} from  '@angular/common/http'
import {Router,ActivatedRoute} from '@angular/router'
import {ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@Injectable({providedIn:'root'})
export class loginService{
    response:any={}
constructor(private http:HttpClient,
            private router:Router,
            private toastr:ToastrService
            ){}

     
    onValidate(email:string,password:string){
        if(!this.onaccess()){
            return this.toastr.error("Already Logged In");
        }
        let details={email:email,password:password};
        this.http.post('http://localhost:8080/api/login',details)
        .subscribe(responseData=>{
            this.response=responseData
        //    console.log(this.response)
        //    console.log(this.response.token)
           
           localStorage.setItem('logToken',this.response.token)
           localStorage.setItem('NoOfItems',this.response.items)
           localStorage.setItem('username',this.response.name)

           this.toastr.success('Welcome ' +this.response.user)

           this.router.navigate(['/'])
           
        },error=>{
            const Error=error;
            // console.log(Error)
            this.toastr.error(Error.error.message)
        })  

    }

    
    onLogout(){
        if(this.onaccess()==false){
        //console.log("Logged Out Successfully");
        this.toastr.success("Logged Out Successfully");
        localStorage.removeItem('logToken');
        this.router.navigate(['/'])

        }
        else{
            this.toastr.info("Not Logged In")
        }
    }
    onaccess(){
     return (localStorage.getItem('logToken')==null);
    }
    onadddelivery(){
        return localStorage.getItem('logToken');
    }
    googleLogin(){
        this.http.get('http://localhost:8080/api/googleLogin')
        .subscribe(ResponseData=>{
            console.log(ResponseData)
        },error=>{
            console.log(error)
        })
    }

} 