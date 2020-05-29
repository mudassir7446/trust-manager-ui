import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";
import { User } from "../user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor(private  authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  logoutButtonClick(){
      this.authenticationService.logout()
      // redirect to login main page
        this.router.navigateByUrl('');
    }

    isLoggedIn():boolean{
      return this.authenticationService.isLoggedIn();
    }
}
