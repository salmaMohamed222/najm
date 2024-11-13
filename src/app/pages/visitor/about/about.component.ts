import { Component } from '@angular/core';
import { NavbarServiceService } from 'src/app/shared/core/navbar-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public navservice:NavbarServiceService) {
    navservice.visible = true;
  }
}
