import{Component} from '@angular/core'
import {ToastrService} from 'ngx-toastr'
import {HttpClient} from '@angular/common/http'
import { NgForm } from '@angular/forms';

@Component({
    selector:'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css']
})


export class FooterComponent{
    constructor(private toastr:ToastrService,
                private http:HttpClient){
    }

    onSubscribe(form:NgForm){
        const details={
            email:form.value.email,
            message:"You have successfully subscribed to Trademall.Enjoy shopping with trademall"
        }
        console.log(details)
        this.http.post('http://localhost:8080/api/responsemail/subscribe',details)
        .subscribe(ResponseData=>{
            console.log(ResponseData)
        },error=>{
            console.log("Error Occured")
        })
            this.toastr.success("Subscribed Successfully")
    }
}