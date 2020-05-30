import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTable } from "@angular/material/table";
import { BeneficiaryService } from "../beneficiary.service";
import { RationKit} from "../ration-kit";
import { HttpService } from "../http.service";

@Component({
  selector: 'app-kitmanager',
  templateUrl: './kitmanager.component.html',
  styleUrls: ['./kitmanager.component.css']
})
export class KitManagerComponent implements OnInit {

  identification:string;
  displayedColumns: string[] = ['date', 'numberOfDays', 'givenBy'];
  datasource: RationKit[];
  idType:string;
   idTypes = [{name: "Aadhaar",value:"aadhar"},{name: "Samagra Id",value:"samagra"}];
  @ViewChild(MatTable) private table : MatTable<any>;
  constructor(private beneficiaryService: BeneficiaryService,private router:Router,private httpService:HttpService,private route:ActivatedRoute) { };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.idType = params.get('idType');
    this.identification = params.get('identification');
  });
}
checkIdentificationDetails(){
  if(this.identification === undefined|| '' == this.identification){
    alert('Enter Id');
    return;
  }
  if(this.idType === undefined|| '' == this.idType){
    alert('Select Id type');
    return;
  }
  this.datasource = this.beneficiaryService.findRationKitHistoryByIdentification(this.idType,this.identification);
}

clearIdentification(){
  this.datasource = undefined;
  this.idType = undefined;
  this.identification = undefined;
}

addEntry(){
  if(this.datasource === undefined){
    alert('check id first');
    return;
  }
  // perpare params
  this.router.navigateByUrl('/addRationKit/'+this.idType+"/"+this.identification);

}
}
