import {Injectable} from '@angular/core'
import {ToastrService} from 'ngx-toastr'
import {HttpClient} from '@angular/common/http'


import {loginService} from '../login/login.component.service'

@Injectable({providedIn:'root'})
export class HomeService{
    constructor(private toastr:ToastrService,
                private loginService:loginService,
                private http:HttpClient){}
    quantity:any={}
    addtocart(){
        if(this.loginService.onaccess()){
        this.toastr.info("Login To Continue");
    }
        else{
            const details={
                token:this.loginService.onadddelivery()

            }
            this.http.put('http://localhost:8080/api/deliveryadd/me',details)
            .subscribe(responseData=>{
                this.quantity=responseData
                localStorage.setItem('NoOfItems',this.quantity.items);
                console.log(this.quantity.items);
                this.toastr.success("Added To Cart");
                
            },error=>{
                console.log("Error Occured")
            })
        }
}
NoOfItems(){
    return localStorage.getItem('NoOfItems');
}
onLogout(){
    localStorage.setItem('NoOfItems','0');
}
}