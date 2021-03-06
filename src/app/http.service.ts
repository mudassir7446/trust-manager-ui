import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private accessToken:string;
  private username:string;
  private baseURL:string = environment.apiBaseUrl+"/"+environment.context+"/";
  constructor(private httpClient : HttpClient) { }

  public post(resourcePath: string ,requestBody:any):any{
    //TODO http communication
    return this.httpClient.post(this.finalURI(resourcePath),requestBody,{headers:{"Authorization":this.accessToken===undefined?'':this.username+" "+this.accessToken}});
  }

  public get(resourcePath:string):any{
    return this.httpClient.get(this.finalURI(resourcePath),{headers:{"Authorization":this.accessToken===undefined?'':this.username+" "+this.accessToken}});
  }

  public put(resourcePath:string,requestBody:any,requestParams?:{ [param: string]: string | string[]; }):any{
    return this.httpClient.put(this.finalURI(resourcePath),requestBody,{headers:{"Authorization":this.accessToken===undefined?'':this.username+" "+this.accessToken},params:requestParams});
  }

  public setAccessToken(username:string,accessToken:string):void{
    this.accessToken = accessToken;
    this.username = username;
  }

  private finalURI(resourcePath:string):string{
    return this.baseURL+resourcePath;
  }
}
