import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
// import { selectValidator } from 'src/app/shared/inputs/select/select.component';

export function usernamesValidator(usernames: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isInvalid = usernames.length === 0;
    return isInvalid ? { 'usernamesInvalid': { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-report-data',
  templateUrl: './report-data.component.html',
  styleUrls: ['./report-data.component.css']
})
export class ReportDataComponent implements OnInit {
  
  showInvalidFeedback = false;
  
  public isSelectTouched = false;
  select = document.getElementsByClassName('p-dropdown-panel');

  outputValue:string = ''
  username:string = ''
  usernames:string[] = []
  urls=[];
  // select options input
  Administration = [ 
  { name: 'غرب المملكة', code: 'NY' },
  { name: 'شرق المملكة', code: 'RM' },
  { name: 'وسط المملكة', code: 'LDN' },
  { name: 'شمال المملكة', code: 'IST' } ]
  country = [
  { name: 'مكه', code: 'NY' },
  { name: 'الرياض', code: 'RM' },
  { name: 'جدة', code: 'LDN' },
  { name: 'الدمام', code: 'IST' } ]
  bransh = [
  { name: 'فرع الرياض', code: 'NY' },
  { name: 'فرع جدة', code: 'RM' },
  { name: 'فرع الدمام', code: 'LDN' } ]

  reportdataForm:any;
  @Output() isFormValidChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log(this.select);
    
   this.reportdataForm = new FormGroup({
    country:new FormControl('',Validators.required),
    branch:new FormControl('',Validators.required),
    administ:new FormControl('',Validators.required),
    chanel:new FormControl('',Validators.required),
    username: new FormControl(),
    // username: new FormControl('', [Validators.required, usernamesValidator(this.usernames)]),
    textarea:new FormControl('',Validators.required),
    timeOfViolationWasCommitted:new FormControl('',Validators.required),
    DateOfKnowledgeViolation:new FormControl('',Validators.required),
    accidentViolationRegion:new FormControl('',Validators.required)
   })
  // Listen to the form's statusChanges observable
  this.reportdataForm.statusChanges.subscribe(() => {
    // Emit the event when the form is valid
    this.isFormValidChange.emit(this.reportdataForm.valid);
  });
  }

  get getCountry() {
    return this.reportdataForm.get('country')
  }
  get getselect() {
    return this.select;
  }
  get getBranch() {
    return this.reportdataForm.get('branch')
  }
  get getAdminist() {
    return this.reportdataForm.get('administ')
  }
  get getChanel() {
    return this.reportdataForm.get('chanel')
  }
  get getUsername() {
    return this.reportdataForm.get('username')
  }
  get getTextarea() {
    return this.reportdataForm.get('textarea')
  }
  get gettimeOfViolationWasCommitted() {
    return this.reportdataForm.get('timeOfViolationWasCommitted')
  }
  get getDateOfKnowledgeViolation() {
    return this.reportdataForm.get('DateOfKnowledgeViolation')
  }
  get getaccidentViolationRegion() {
    return this.reportdataForm.get('accidentViolationRegion')
  }
  
   

formOperation(e: Event) {
  console.log("salma");
}


  onClick():void {
    if (this.username.trim() !== '') {
      this.usernames.push(this.username);
      this.username = ''; // Clear the input after adding the username
      // this.updateUsernameValidator();
      
    }
    
  }
  
  removeUsername(user: string) {
    this.usernames = this.usernames.filter(u => u !== user);
  }

  imageFiles: FilePreview[] = [];
  otherFiles: FilePreview[] = [];

  onFileSelected(event: any): void {
    const files = event.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e: any) => {
          const url = e.target.result;
          const fileExtension = this.getFileExtension(file.name);
          if (['jpg', 'png', 'svg', 'jpeg'].includes(fileExtension)) {
            this.imageFiles.push({ name: file.name, url });
          } else {
            this.otherFiles.push({ name: file.name, url });
          }
        };

        reader.readAsDataURL(file);
      }
    }
  }

  private getFileExtension(filename: string): string {
    return filename.split('.').pop() || '';
  }

  // applystyle(){
  //   const title=document.querySelectorAll('.stepword'); 
  //   const icon=document.querySelectorAll('.stepicon');
  //   const icondata=document.querySelectorAll('.iconnn');
  //   const no = document.querySelectorAll('.no');
  
  
  //   const lines = document.querySelectorAll('.step');
  //   lines.forEach(line => {
  //     lines[2].classList.add('completed');
  //   });
  // ( no[2] as HTMLElement).style.display = 'none';
  // ( icondata[2] as HTMLElement).style.display = 'block';
  // ( title[2] as HTMLElement).classList.add('laststepword');
  // ( icon[2] as HTMLElement).classList.add('laststep');
  // }
  // removestyle() {
  //   const title=document.querySelectorAll('.stepword'); 
  //   const icon=document.querySelectorAll('.stepicon');
  //   const icondata=document.querySelectorAll('.iconnn');
  //   const no = document.querySelectorAll('.no');
  
  
  //   const lines = document.querySelectorAll('.step');
  //   lines.forEach(line => {
  //     lines[1].classList.remove('completed');
  //   });
  // ( no[1] as HTMLElement).style.display = 'block';
  // ( icondata[1] as HTMLElement).style.display = 'none';
  // ( title[1] as HTMLElement).classList.remove('laststepword');
  // ( icon[1] as HTMLElement).classList.remove('laststep');
  // }
//   console() {
//   console.log("form", this.reportdataForm.valid);
//   console.log("form", this.reportdataForm);
//  //this.isFormValidChange = this.reportdataForm.valid;
//   console.log(this.isFormValidChange);
// }
// updateUsernameValidator() {
//   const validator = usernamesValidator(this.usernames);
//     this.reportdataForm.get('username')?.setValidators([Validators.required, validator]);
//     this.reportdataForm.get('username')?.updateValueAndValidity();

//     // Update the boolean variable based on the current form validity
//     this.isFormValid = this.reportdataForm.valid;
// }

onOptionSelected(event: any) {
  // Check form state and update the class
  if (this.getCountry.invalid && (this.getCountry.touched || this.getCountry.dirty)) {
    // Delay the invalid feedback for a short period
    setTimeout(() => {
      this.showInvalidFeedback = true;
      setTimeout(() => {
        this.showInvalidFeedback = false;
      }, 500); // Adjust the delay time as needed
    }, 200); // Adjust the delay time as needed
  }
}

}


interface FilePreview {
  name: string;
  url: string;
}