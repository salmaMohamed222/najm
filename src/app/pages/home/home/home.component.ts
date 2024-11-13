import { AuthService } from './../../../core/auth.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarServiceService } from 'src/app/shared/core/navbar-service.service';
// import { }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeDiv: string | null = null;
  isButtonDisabled:boolean = true;

  constructor(private router: Router, public navservice:NavbarServiceService, public user:AuthService) {
    navservice.visible = false;
  }

  toggleActive(divNumber: string) {
    if(this.activeDiv === divNumber)
    {
      this.activeDiv = null;
      this.isButtonDisabled = true;
    }
    else
    {
      this.activeDiv = divNumber;   
      this.isButtonDisabled = false;  
    }
    this.isButtonDisabled = this.activeDiv === null;
  } 
  navigateTo() {
    if(this.activeDiv === 'visitor') {
      this.router.navigate(['/visitor']);
      this.user.userRole = 'زائر';
    }
    if(this.activeDiv === 'reportRef') {
      this.router.navigate(['/account/signin']);
      this.user.userRole = 'مراجع البلاغات';
    }
    if(this.activeDiv === 'auditor') {
      this.router.navigate(['/account/signin']);
      this.user.userRole = 'مدقق الحسابات';
    }
    if(this.activeDiv === 'reportAuditor') {
      this.router.navigate(['/account/signin']);
      this.user.userRole = 'مدقق البلاغات';
    }
  }
}
