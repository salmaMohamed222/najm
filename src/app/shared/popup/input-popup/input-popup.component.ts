import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-input-popup',
  templateUrl: './input-popup.component.html',
  styleUrls: ['./input-popup.component.css'],
  providers: [MessageService]
})
export class InputPopupComponent implements OnInit{

  
  @Input() title:string ="يرجي كتابة نوع البلاغ"
  @Output() close = new EventEmitter<void>();

  inputForm :any;
  
  
  constructor(public fb:FormBuilder,public messageService: MessageService,
    public dialogRef: MatDialogRef<InputPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void { 
   this.inputForm=new FormGroup({
    textarea:new FormControl('')
   }) 
   
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveData(e:Event) {
        console.log(this.inputForm.value);
        //alert("تم اضافة البلاغ بنجاح");
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
        this.closeDialog(); 

  }
  get gettextarea() {
    return this.inputForm.controls['textarea'];
  }
  showSuccess() {
    console.log(this.inputForm.value);
    this.messageService.add({ severity: 'success', summary: 'نجاح', detail: 'تم اضافة البلاغ بنجاح' });
  }
}
