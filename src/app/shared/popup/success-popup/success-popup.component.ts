import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.css']
})
export class SuccessPopupComponent {
 
  constructor(public router:Router,
    public dialogRef: MatDialogRef<SuccessPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {successtype: string, route:string, content:string}
  ) {}
  @Input() successtype:string = '';
  @Input() route:string = '';
  @Input() content:string = '';
  closeDialog(): void {
    this.dialogRef.close();
  }
  onclick() {
    this.closeDialog();
    this.router.navigate([this.data.route]);
  }
}
