import {Component} from '@angular/core'
import {loginService} from '../login/login.component.service'
import {HomeService} from '../home/home.component.service'
@Component({
    selector:'app-order-details',
    templateUrl:'./order-details.component.html'
})
export class OrderDetailsComponent{
    constructor(private loginService:loginService,
                private HomeService:HomeService){}
    onLogout(){
        this.HomeService.onLogout();
        this.loginService.onLogout();
    }
    show(){
        console.log(this.loginService.onaccess())
       return !this.loginService.onaccess();
    }
}