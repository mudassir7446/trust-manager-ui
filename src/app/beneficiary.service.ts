import { Injectable } from '@angular/core';
import {RationKit} from './ration-kit';
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private httpService:HttpService) { }

  public findRationKitHistoryByIdentification(idType:string,identification:string): RationKit[] {
  return this.httpService.get('covid/beneficiary/rationKit/history/'+idType+"/"+identification);
  }

  public addNewRationKit(identification:string, idType:string,numberOfDays:number): Promise<RationKit>{

    let params = {"numberOfDays":numberOfDays+'',"beneficiaryId":identification,"idType":idType}
    return this.httpService.put('covid/beneficiary/rationKit',{},params).toPromise();
  }
}
