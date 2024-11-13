import { Component } from '@angular/core';
import { NavbarServiceService } from 'src/app/shared/core/navbar-service.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  constructor(public navservice:NavbarServiceService) {
    navservice.visible = true;
  }
}
