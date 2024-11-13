import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrls: ['./tab-card.component.css']
})
export class TabCardComponent implements OnInit{
  @Input() bordder:string ='1px solid #E6E6E6';
  @Input() paddingg:string ='32px'
  private authServiceSubscription: Subscription | undefined;
  userRole: string = ''
  refreportappear: boolean = false
  constructor(private route: ActivatedRoute, public user:AuthService) {}
  ngOnInit(): void {
    // Subscribe to changes in userRole
    this.authServiceSubscription = this.user.userRole$.subscribe(role => {
      this.userRole = role;
  
      if (this.userRole === 'مدقق البلاغات' || this.userRole === 'مدقق الحسابات') {
        this.refreportappear = true;
      } else {
        this.refreportappear = false;
      }
      
      console.log(role);
    });
  }
  
  @Input() opacityy:number = 0;
  handleAccordionToggle(isOpen: boolean): void {
    // Do something with the accordion state (e.g., update a property)
    console.log('Accordion is open:', isOpen);

}

}