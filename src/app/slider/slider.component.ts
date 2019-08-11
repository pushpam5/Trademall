import {Component} from '@angular/core'
import {SwiperModule,SwiperConfigInterface} from 'ngx-swiper-wrapper'

@Component({
    selector:'app-slider',
    templateUrl:'./slider.component.html',
    styleUrls:['./slider.component.css']
})


export class SliderComponent{
    config:SwiperConfigInterface={
    keyboard: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    loop:true
    
    };
    
    }

      
    