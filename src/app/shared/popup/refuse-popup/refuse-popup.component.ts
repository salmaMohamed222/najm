import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SuccessPopupComponent } from '../success-popup/success-popup.component';
import { InputPopupComponent } from '../input-popup/input-popup.component';
import { ConfirmrefuseComponent } from '../confirmrefuse/confirmrefuse.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-refuse-popup',
  templateUrl: './refuse-popup.component.html',
  styleUrls: ['./refuse-popup.component.css'],
  providers: [MessageService]
})
export class RefusePopupComponent implements OnInit{
  constructor(private route: ActivatedRoute,public router:Router, public dialog: MatDialog, 
    public dialogRef: MatDialogRef<RefusePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
  @ViewChild(SuccessPopupComponent) inputPopup!: InputPopupComponent;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // console.log('ID:', id);
      // Handle the changes
    });

  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  onclick() {
    this.closeDialog();
    this.closeDialog();

  }
  onrefuse(){
      this.dialog.open(ConfirmrefuseComponent, {
        data: {
          title: 'يرجي كتابة سبب الرفض',
        },
      });
      this.closeDialog();
   // Assuming you have the 'id' value from somewhere, replace '123' with the actual id
   const id = this.data.id; // Replace with the correct property from your data

   // Navigate to the 'report-references/id' route
   this.router.navigate(['/report-references', id]);

  }
}
