import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from "../authentication.service";
import { User } from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn : boolean = false;
  user:User;
  username:string;
  password:string;
  constructor(private  authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  login():void {
    this.user = this.authenticationService.login(this.username,this.password);
    this.password = undefined;
  }
}
