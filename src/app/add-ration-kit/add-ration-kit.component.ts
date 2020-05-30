import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from "../beneficiary.service";
import { Router ,ActivatedRoute} from "@angular/router";
import { RationKit } from "../ration-kit";

@Component({
  selector: 'app-add-ration-kit',
  templateUrl: './add-ration-kit.component.html',
  styleUrls: ['./add-ration-kit.component.css']
})
export class AddRationKitComponent implements OnInit {

  numberOfDays:number=0;
  identification:string;
  idType:string;
  //TODO capture on redirection
  constructor(private beneficiaryService: BeneficiaryService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.identification = params.get('identification');
    this.idType = params.get('idType');
  });
  }

addRationKit():void{
  //TODO add ration kit and go back to search screen
  if(this.numberOfDays<1){
    alert('Enter number of days');
    return;
  }
  this.beneficiaryService.addNewRationKit(this.identification,this.idType,this.numberOfDays).then((rationKit:RationKit) => {  this.router.navigateByUrl('');
});
}
}
