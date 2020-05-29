import { Injectable } from '@angular/core';
import {RationKit} from './ration-kit'

const ELEMENT_DATA: RationKit[] = [
  {date: 1588636800000, rationDays: 10, givenBy: 'Anjuman'},
  {date: 1589500800000, rationDays: 8, givenBy: 'Danish'},
  {date: 1590687530000, rationDays: 10, givenBy: 'Shifa Rehmani'},
];


@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor() { }

  public findRationKitHistoryBySamagraId(samagraId:string): RationKit[] {
    return ELEMENT_DATA.concat([]);
  }

  public addNewRationKit(samagraId:string,organization:string, quantity:string, date: Date): Promise<RationKit>{
    return new Promise((resolve,reject)=>{ resolve({date: 1590687530000,rationDays:10,givenBy:'Test'});});
  }
}
