import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {SwiperModule,SWIPER_CONFIG,SwiperConfigInterface} from 'ngx-swiper-wrapper'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component'
import {LoginComponent} from './login/login.component'
import {ProductDetailsComponent} from './product-details/product-details.component'
import {OrderDetailsComponent} from './order-details/order-details.component'
import {CheckoutComponent} from './checkout/checkout.component'
import {AllProductComponent} from './all-product/all-product.component'
import { AboutUsComponent } from './About Us/about-us.component';
import {UIComponent} from './ui/ui.component'
import {ContactUsComponent} from './Contact-us/contact-us.component'
import {HomeComponent} from './home/home.component'
import {SliderComponent} from './slider/slider.component'
import {TitleComponent} from './title/title.component'
import {SignupComponent} from './signup/signup.component'
import {ErrorDisplayComponent} from './error-display/error-display.component'



const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  observer:true
};


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProductDetailsComponent,
    OrderDetailsComponent,
    CheckoutComponent,
    AllProductComponent,
    AboutUsComponent,
    UIComponent,
    ContactUsComponent,
    HomeComponent,
    SliderComponent,
    TitleComponent,
    SignupComponent,
    ErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      tapToDismiss:true
      
    }),
    HttpClientModule,

    RouterModule.forRoot([
      {
        path:'checkout',
        component:CheckoutComponent
        
      },
      {
        path:'login',
        component:LoginComponent,
        data: { title: 'Login' }
      },
      {
        path:'all-product',
        component:AllProductComponent
      },
      {
        path:'about-us',
        component:AboutUsComponent
      },
      {
        path:'order-details',
        component:OrderDetailsComponent
      },
      {
        path:'product-details',
        component:ProductDetailsComponent

      },
      {
        path:'contact-us',
        component:ContactUsComponent
      },
      {
        path:'home',
        component:UIComponent
      },
      {
        path:'',
        pathMatch: 'full',
        component:UIComponent
      },
      {
        path:'Signup',
        component:SignupComponent
      }
    ])
  ],
  providers: [Title,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
