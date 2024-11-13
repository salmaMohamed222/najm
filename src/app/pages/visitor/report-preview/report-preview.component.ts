import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessPopupComponent } from 'src/app/shared/popup/success-popup/success-popup.component';

@Component({
  selector: 'app-report-preview',
  templateUrl: './report-preview.component.html',
  styleUrls: ['./report-preview.component.css']
})
export class ReportPreviewComponent {
 
  constructor(public dialog:MatDialog) { }
  applystyle(){
    const title=document.querySelectorAll('.stepword'); 
    const icon=document.querySelectorAll('.stepicon');
    const icondata=document.querySelectorAll('.iconnn');
    const no = document.querySelectorAll('.no');
  
  
    const lines = document.querySelectorAll('.step');
    lines.forEach(line => {
      lines[3].classList.add('completed');
    });
  ( no[3] as HTMLElement).style.display = 'none';
  ( icondata[3] as HTMLElement).style.display = 'block';
  ( title[3] as HTMLElement).classList.add('laststepword');
  ( icon[3] as HTMLElement).classList.add('laststep');
  
  this.openDialog();
  }
  removestyle() {
    const title=document.querySelectorAll('.stepword'); 
    const icon=document.querySelectorAll('.stepicon');
    const icondata=document.querySelectorAll('.iconnn');
    const no = document.querySelectorAll('.no');
  
    const lines = document.querySelectorAll('.step');
    lines.forEach(line => {
      lines[2].classList.remove('completed');
    });
  ( no[2] as HTMLElement).style.display = 'block';
  ( icondata[2] as HTMLElement).style.display = 'none';
  ( title[2] as HTMLElement).classList.remove('laststepword');
  ( icon[2] as HTMLElement).classList.remove('laststep');
  }
  openDialog() {
    this.dialog.open(SuccessPopupComponent, {
      data: { successtype: 'إعتماد' , route: '/visitor'},
    });
  }
   
}
