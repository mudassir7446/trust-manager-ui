import { Injectable } from '@angular/core';
import * as uuid from "uuid";
import { User } from "./user";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private accessToken : string;
  private username:string;
  constructor(private httpService:HttpService) { }


    isLoggedIn(){
      return this.accessToken != undefined;
    }

    public login(username:string, password:string): User {
      //TODO call login service
      this.httpService.post('auth/basic/login',{username:username,password:password}).subscribe(response =>{
        this.accessToken = response.accessToken;
        this.username = username;
        // share the access token with http HttpService
        this.httpService.setAccessToken(this.username,this.accessToken);
      });

      return {name:'Mudassir Rehman', role: 'Admin'};
    }

    public logout():boolean {
      this.httpService.get('auth/basic/logout').subscribe(response =>{
        this.accessToken = undefined;
        // reset the access token with http HttpService
        this.httpService.setAccessToken(undefined,undefined);
      });
      return true;
    }
}
