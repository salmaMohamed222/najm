import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-redirect-popup',
  templateUrl: './redirect-popup.component.html',
  styleUrls: ['./redirect-popup.component.css'],
  providers: [MessageService]
})
export class RedirectPopupComponent implements OnInit{

  
  @Output() close = new EventEmitter<void>();
  inputForm :any;
    // select options input
    username = [ 
      { name: 'فهد بن ابراهيم', code: 'NY' },
      { name: ' سلمي محمد', code: 'RM' },
      { name: 'ابراهيم ناجي', code: 'LDN' },
      { name: 'فهد بن ابراهيم', code: 'NY' },
      { name: ' سلمي محمد', code: 'RM' },
      { name: 'فهد بن ابراهيم', code: 'NY' },
      { name: ' سلمي محمد', code: 'RM' }, ]
    section = [
      { name: 'قسم الأموال العامة', code: 'NY' },
      { name: 'قسم الأموال الخاصه', code: 'RM' },
      { name: 'قسم الأموال العامة', code: 'NY' },
      { name: 'قسم الأموال الخاصه', code: 'RM' },
      { name: 'قسم الأموال العامة', code: 'NY' },
      { name: 'قسم الأموال الخاصه', code: 'RM' } ]

  constructor(public fb:FormBuilder,public messageService: MessageService,
    public dialogRef: MatDialogRef<RedirectPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void { 
   this.inputForm=new FormGroup({
    textarea:new FormControl('')
   }) 
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  showSuccess(){
    this.messageService.add({ severity: 'success', summary: 'نجاح', detail: 'تم إعادة توجيه البلاغ بنجاح' });
  }
  saveData(e:Event) {console.log('test');
  
    // e.preventDefault();
    if(this.inputForm.valid){
      console.log('data saved');
      // this.textareaValueChange.emit(this.textareaValue);
        console.log(this.inputForm.value);
        // alert("تم إعادة توجيه البلاغ بنجاح");
        this.showSuccess();
        this.closeDialog(); 
      
    }
    else {
      console.log('invalid')
      this.inputForm.markAllAsTouched();
    }

  }

  get getusername() {
    return this.inputForm.controls['textarea'];
  }
}
