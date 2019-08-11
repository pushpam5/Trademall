import {Component} from '@angular/core'
import {SwiperConfigInterface,SwiperModule} from 'ngx-swiper-wrapper'

import {HomeService} from './home.component.service'

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})


export class HomeComponent{
    constructor(private HomeService:HomeService){}
   public  config1:SwiperConfigInterface={
  
        initialSlide:1,
        slidesPerView:1,
        observer:true,
        keyboard: false,
        scrollbar: false,
        navigation: true,
        pagination: false,
        loop:true

        
      }
    addtocart(){
      this.HomeService.addtocart();
    }
    
}