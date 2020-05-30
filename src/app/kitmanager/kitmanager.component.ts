import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTable } from "@angular/material/table";
import { BeneficiaryService } from "../beneficiary.service";
import { RationKit} from "../ration-kit";

@Component({
  selector: 'app-kitmanager',
  templateUrl: './kitmanager.component.html',
  styleUrls: ['./kitmanager.component.css']
})
export class KitManagerComponent implements OnInit {

  identification;
  displayedColumns: string[] = ['date', 'rationDays', 'givenBy'];
  datasource: RationKit[];
  idType:string;
   idTypes = [{name: "Aadhaar",value:"aadhar"},{name: "Samagra Id",value:"samagra"}];
  @ViewChild(MatTable) private table : MatTable<any>;
  constructor(private beneficiaryService: BeneficiaryService,private router:Router) { };

  ngOnInit(): void {
  }

checkIdentificationDetails(){
  if(this.identification === undefined){
    alert('Enter Samagra Id');
    return;
  }
  this.datasource = this.beneficiaryService.findRationKitHistoryByIdentification(this.identification);
}

clearIdentification(){
  this.datasource = undefined;
  this.idType = undefined;
  this.identification = undefined;
}

addEntry(){
  if(this.datasource === undefined){
    alert('check samagra id first');
    return;
  }
  this.router.navigateByUrl('/addRationKit');
}
}
