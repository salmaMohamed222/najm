import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-grayestablishcard',
  templateUrl: './grayestablishcard.component.html',
  styleUrls: ['./grayestablishcard.component.css']
})
export class GrayestablishcardComponent implements OnInit{
  
  // @Input() marginn:string = '0px 50px;' 
  private authServiceSubscription: Subscription | undefined;
  userRole: string = ''
  constructor(private route: ActivatedRoute, public user:AuthService) {}

  @Input() tabs:string[] = ['تفاصيل البلاغ'];
  activatedTabIndex:number = 0;

  ngOnInit(): void {
    // Subscribe to the route parameters observable
    this.route.paramMap.subscribe(params => {
      // Retrieve data from URL parameters
      const id = params.get('id');
      const name = params.get('name');
      this.reportNo = id
    });

       // Subscribe to changes in userRole
       this.authServiceSubscription = this.user.userRole$.subscribe(role => {
        this.userRole = role;
        if (this.userRole === 'مراجع البلاغات') {
          this.tabs = ['تفاصيل البلاغ'];
        } else if (this.userRole === 'مدقق البلاغات') {
          this.tabs = ['تفاصيل البلاغ', 'بيانات مراجع البلاغات'];
        } else if (this.userRole === 'مدقق الحسابات') {
          this.tabs = ['تفاصيل البلاغ','بيانات مراجع البلاغات','بيانات مدقق البلاغات'];
        }
        console.log(role);
      });
  }
 
  


  @Input() title:string = 'بلاغ رقم :'
  @Input() subTitle:string = 'تفاصيل البلاغ'
  @Input() reportNo:string|null = ''
  @Input() reportStatus:string = 'مقبول'
  @Input() primaryTitle:string = 'إجمالي الحوادث'
  @Input() secondaryTitle:string = ''
  @Input() appearTab:boolean = true
  @Input() Padding:string = '20px'
  @Input() backgroundColor:string = ''
  index: number = 0;


 
  tabChange(tabIndex:number) {
   debugger;
   this.activatedTabIndex = tabIndex;
   }

  handleAccordionToggle(isOpen: boolean): void {
    // Do something with the accordion state (e.g., update a property)
    console.log('Accordion is open:', isOpen);
  }
  changeTab(tabIndex: any) {
    this.index = tabIndex
   }
   
}
