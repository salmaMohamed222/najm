import { Component, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import {MatDialog} from '@angular/material/dialog';

import { InputPopupComponent } from 'src/app/shared/popup/input-popup/input-popup.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-report-classification',
  templateUrl: './report-classification.component.html',
  styleUrls: ['./report-classification.component.css'],
})
export class ReportClassificationComponent {

  constructor(public dialog: MatDialog) {}
  @ViewChild('classificationForm', { static: true }) form?: NgForm;
  @Output() activeDivsChange: EventEmitter<number[]> = new EventEmitter<number[]>();
   
  classificationReport:{icon:string,text:string}[] = [ 
    { icon: "moneyicon", text: "احتيال او فساد او رشوة او اختلاس او تزوير" },
    { icon: "coinicon", text: "مخالفة للانظمة والتعليمات" },
    { icon: "eduactionicon", text: "غسل اموال او تمويل إرهاب" },
    { icon: "policiyicon", text: "مخالفة لسياسة وإجراءات الشركة" },
    { icon: "caricon", text: "مخالفة لمدونة قواعد السلوك" },
    { icon: "moreicon", text: "أخري..." },]
  activeDivs: number[] = [];
  @ViewChild(InputPopupComponent) inputPopup!: InputPopupComponent;

  toggleActive(divNumber: number) {
    const index = this.activeDivs?.indexOf(divNumber);
    if(index === -1) {
      this.activeDivs?.push(divNumber);
      
    } else {
      this.activeDivs?.splice(index, 1);
    }
    console.log(this.activeDivs);
    this.activeDivsChange.emit(this.activeDivs);
    
  }

  openDialog() {
    this.dialog.open(InputPopupComponent, {
    });
    this.toggleActive(6);
  } 
  applystyle(){
  const title=document.querySelectorAll('.stepword'); 
  const icon=document.querySelectorAll('.stepicon');
  const icondata=document.querySelectorAll('.iconnn');
  const no = document.querySelectorAll('.no');


  const lines = document.querySelectorAll('.step');
  lines.forEach(line => {
    lines[0].classList.add('completed');
  });
( no[0] as HTMLElement).style.display = 'none';
( icondata[0] as HTMLElement).style.display = 'block';
( title[0] as HTMLElement).classList.add('laststepword');
( icon[0] as HTMLElement).classList.add('laststep');


}

}




// import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { MatCheckbox } from '@angular/material/checkbox';
// import {MatDialog} from '@angular/material/dialog';

// import { InputPopupComponent } from 'src/app/shared/popup/input-popup/input-popup.component';



// @Component({
//   selector: 'app-report-classification',
//   templateUrl: './report-classification.component.html',
//   styleUrls: ['./report-classification.component.css'],
// })
// export class ReportClassificationComponent implements OnInit{

//   constructor(public dialog: MatDialog) {}

//   @ViewChild('classificationForm', { static: true }) form?: NgForm;
//   @Output() activeDivsChange: EventEmitter<number[]> = new EventEmitter<number[]>();

//   activeDivs: number[] = [];
//   @ViewChild(InputPopupComponent) inputPopup!: InputPopupComponent;
//   toggleActive: ((number:number) => void) | undefined;

//   ngOnInit(): void {
//     // const toggleActive = (divNumber: number):void => {
//     //   const index = this.activeDivs.indexOf(divNumber);
//     //   if(index === -1) {
//     //     this.activeDivs.push(divNumber);
        
//     //   } else {
//     //     this.activeDivs.splice(index, 1);
//     //   }
//     //   console.log(this.activeDivs);
//     //   this.activeDivsChange.emit(this.activeDivs);
//     //   console.log(this.activeDivsChange.emit(this.activeDivs));
      
//     // }
//     // this.toggleActive = toggleActive;

//     const toggleActive = (divNumber: number): void => {
//       const index = this.activeDivs.indexOf(divNumber);
//       if (index === -1) {
//         this.activeDivs.push(divNumber);
//       } else {
//         this.activeDivs.splice(index, 1);
//       }
//       console.log(this.activeDivs);
//       this.activeDivsChange.emit(this.activeDivs);
//     };

//     // Assign toggleActive to the class property
//     this.toggleActive = toggleActive;
//   }

//   // toggleActive(divNumber: number) {
//   //   const index = this.activeDivs?.indexOf(divNumber);
//   //   if(index === -1) {
//   //     this.activeDivs?.push(divNumber);
      
//   //   } else {
//   //     this.activeDivs?.splice(index, 1);
//   //   }
//   //   console.log(this.activeDivs);
//   //   this.activeDivsChange.emit(this.activeDivs);
//   //   console.log(this.activeDivsChange.emit(this.activeDivs));
    
//   // }

//   openDialog() {
//     this.dialog.open(InputPopupComponent, {
//     });
//     if(this.toggleActive)
//     this.toggleActive(6);
//   } 


//   applystyle(){
//   const title=document.querySelectorAll('.stepword'); 
//   const icon=document.querySelectorAll('.stepicon');
//   const icondata=document.querySelectorAll('.iconnn');
//   const no = document.querySelectorAll('.no');


//   const lines = document.querySelectorAll('.step');
//   lines.forEach(line => {
//     lines[0].classList.add('completed');
//   });
// ( no[0] as HTMLElement).style.display = 'none';
// ( icondata[0] as HTMLElement).style.display = 'block';
// ( title[0] as HTMLElement).classList.add('laststepword');
// ( icon[0] as HTMLElement).classList.add('laststep');


// }

// }



