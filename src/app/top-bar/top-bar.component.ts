import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";
import { User } from "../user";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  loginButtonText : string = 'Login';
  isLoggedIn : boolean = false;
  user:User;
  constructor(private  authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  loginButtonClick(){
    if(this.isLoggedIn){
      if(this.authenticationService.logout(this.user)){
        this.user = undefined;
      }
  }else {
    this.user = this.authenticationService.login('test','test');
  }
  this.isLoggedIn = this.user === undefined?false:true;
    this.loginButtonText =  this.isLoggedIn?'Logout':'Login';
  }
}
