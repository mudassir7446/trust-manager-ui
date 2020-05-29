import { Injectable } from '@angular/core';
import * as uuid from "uuid";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private accessToken : string;
  constructor() { }


    isLoggedIn(){
      return this.accessToken != undefined;
    }

    public login(username:string, password:string): User {
      //TODO call login service
      this.accessToken = uuid.v4();
      return {name:'Mudassir Rehman', role: 'Admin'};
    }

    public logout(user:User):boolean {
      this.accessToken = undefined;
      return true;
    }
}
