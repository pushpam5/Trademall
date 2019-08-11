import {Injectable} from '@angular/core'
import {loginService} from './login/login.component.service'
@Injectable({providedIn:'root'})

export class Appservice{

    constructor(private loginService: loginService){}
    
 
}