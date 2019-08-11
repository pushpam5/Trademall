import {Component} from '@angular/core'
import {HomeService} from '../home/home.component.service'
@Component({
    selector:'app-all-product',
    templateUrl:'./all-product.component.html'
})
export class AllProductComponent{
    constructor(private HomeService:HomeService){}
    addtocart(){
       
        this.HomeService.addtocart();
    }

}