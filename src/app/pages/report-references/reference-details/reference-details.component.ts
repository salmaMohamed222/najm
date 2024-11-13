import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { NavbarServiceService } from 'src/app/shared/core/navbar-service.service';
import { InputPopupComponent } from 'src/app/shared/popup/input-popup/input-popup.component';
import { RedirectPopupComponent } from 'src/app/shared/popup/redirect-popup/redirect-popup.component';
import { RefusePopupComponent } from 'src/app/shared/popup/refuse-popup/refuse-popup.component';
import { SuccessPopupComponent } from 'src/app/shared/popup/success-popup/success-popup.component';

@Component({
  selector: 'app-reference-details',
  templateUrl: './reference-details.component.html',
  styleUrls: ['./reference-details.component.css']
})
export class ReferenceDetailsComponent implements OnInit {
   
  redirectTo:string = ""
  userRole: string = 'مدقق البلاغات';
  private authServiceSubscription: Subscription | undefined;
  
  @ViewChild(SuccessPopupComponent) inputPopup!: SuccessPopupComponent;
  constructor(private route: ActivatedRoute, public dialog: MatDialog, public nav:NavbarServiceService, public user: AuthService) {
    this.route.paramMap.subscribe(params => {
      const reportNo = params.get('reportNo');
      console.log(reportNo);
    });
  }
  ngOnInit(): void {
    // Subscribe to changes in userRole
    this.authServiceSubscription = this.user.userRole$.subscribe(role => {
      this.userRole = role;
      console.log(this.userRole);
    });
    if(this.userRole == 'مراجع البلاغات') {
      this.redirectTo = '!كبلاغ رسمي وسيتم مراجعته من قبل مدقق البلاغات' 
    }
    if(this.userRole == 'مدقق البلاغات') {
      this.redirectTo = '!كبلاغ رسمي وسيتم مراجعته من قبل مدقق الحسابات'
    }
    if(this.userRole == 'مدقق الحسابات') {
      this.redirectTo = '!كبلاغ رسمي وسيتم إتخاذ الإجراء اللازم من قبل الجهة المختصة'
    }
  }
  openDialog() {
    this.dialog.open(SuccessPopupComponent, {
      data: { successtype: 'إعتماد ' , route: '/report-references',content: this.redirectTo},
    });
  } 
  openRefuseDialog() {
    this.dialog.open(RefusePopupComponent, {
    });
  }
  openRedirectDialog() {
    this.dialog.open(RedirectPopupComponent, {
    });
  }

}
