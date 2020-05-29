import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private authenticationService:AuthenticationService) { };

  ngOnInit(): void {
  }

  checkLoggedIn():boolean {
    return this.authenticationService.isLoggedIn();
  }
}
