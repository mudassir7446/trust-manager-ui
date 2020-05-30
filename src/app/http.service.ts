import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private accessToken:string;
  private baseURL:string = '/covidTrust/'
  constructor(private httpClient : HttpClient) { }

  public post(resourcePath: string ,requestBody:any):any{
    //TODO http communication
    return this.httpClient.post(this.finalURI(resourcePath),requestBody,{headers:{"accessToken":this.accessToken===undefined?'':this.accessToken}});
  }

  public get(resourcePath:string):any{
    return this.httpClient.get(this.finalURI(resourcePath),{headers:{"accessToken":this.accessToken===undefined?'':this.accessToken}});
  }

  public put(resourcePath:string,requestBody:any,requestParams?:{ [param: string]: string | string[]; }):any{
    return this.httpClient.put(this.finalURI(resourcePath),requestBody,{headers:{"accessToken":this.accessToken===undefined?'':this.accessToken},params:requestParams});
  }

  public setAccessToken(accessToken:string):void{
    this.accessToken = accessToken;
  }

  private finalURI(resourcePath:string):string{
    return this.baseURL+resourcePath;
  }
}
