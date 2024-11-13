import { AuthService } from './../../../core/auth.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { NavbarServiceService } from '../navbar-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
 userRole: string = 'مدقق البلاغات';
  private authServiceSubscription: Subscription | undefined;

  constructor(public nav: NavbarServiceService, public user: AuthService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful();

    // Subscribe to changes in userRole
    this.authServiceSubscription = this.user.userRole$.subscribe(role => {
      this.userRole = role;
      console.log(this.userRole);
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed
    if (this.authServiceSubscription) {
      this.authServiceSubscription.unsubscribe();
    }
  }

  onClick() {
    console.log(this.userRole);
  }
}
