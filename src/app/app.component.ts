import { Component} from '@angular/core';
import {Title} from '@angular/platform-browser'
import {loginService} from './login/login.component.service'
import {HomeService} from './home/home.component.service'
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeAnimation]
})

export class AppComponent{
  amount:number
  constructor(public settitleservice:Title,
              public loginService:loginService,
              private HomeService:HomeService){}
public SetTitle(newtitle:string){
  this.settitleservice.setTitle(newtitle)
  }

public AuthenticateUser(){
  
  this.NoOfItems=this.HomeService.NoOfItems();
  return this.loginService.onaccess()
  
}
public Logout(){
    this.loginService.onLogout();
    this.HomeService.onLogout()

    this.HomeService.NoOfItems();
    return this.loginService.onaccess();
  
}  
cartdropdown(){
	var x = document.getElementById("shopping-cart");
	if (x.style.display === "none") {
		x.style.display = "block";
	} 
	else {
		x.style.display = "none";
	}
  }
 price(){
   let value=150*this.amount;
 } 
  

NoOfItems=this.HomeService.NoOfItems();


  
     



}
