import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from "../beneficiary.service";
import { Router } from "@angular/router";
import { RationKit } from "../ration-kit";

@Component({
  selector: 'app-add-ration-kit',
  templateUrl: './add-ration-kit.component.html',
  styleUrls: ['./add-ration-kit.component.css']
})
export class AddRationKitComponent implements OnInit {

  numberOfDays:string;
  constructor(private beneficiaryService: BeneficiaryService,private router:Router) { }

  ngOnInit(): void {
  }

addRationKit():void{
  //TODO add ration kit and go back to search screen
  this.beneficiaryService.addNewRationKit('test','test','Danish',new Date()).then((rationKit:RationKit) => {  this.router.navigateByUrl('');
});
}
}
