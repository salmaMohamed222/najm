import { NavbarServiceService } from 'src/app/shared/core/navbar-service.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, Optional, SimpleChanges, Type } from '@angular/core';
import { SelectComponent } from 'src/app/shared/inputs/select/select.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],

})
export class ReferencesComponent implements OnInit {
  constructor(public navservice:NavbarServiceService) {
    navservice.visible = true;
  }

  myForm:any;


  get getType() {
    return this.myForm.get('Type')
  }
  get getDate() {
    return this.myForm.get('Date')
  }
  get getStatus() {
    return this.myForm.get('Status')
  }
  get getNoticeage() {
    return this.myForm.get('Noticeage')
  }
  get getCountry() {
    return this.myForm.get('Country')
  }
 dataAppear:boolean = false;

  ngOnInit(): void {
    this.myForm =  new FormGroup({
      Type:new FormControl('', Validators.required),
      Status:new FormControl('',Validators.required),
      Noticeage:new FormControl('',Validators.required),
      Country:new FormControl('',Validators.required),
    })
  
  }
 
    type = [ 
    { name: 'جسيمه', code: 'NY' },
    { name: 'بسيطة', code: 'RM' },
    { name: 'ضرر', code: 'LDN' } ]
    country = [
    { name: 'مكه', code: 'NY' },
    { name: 'الرياض', code: 'RM' },
    { name: 'جدة', code: 'LDN' },
    { name: 'الدمام', code: 'IST' } ]
    status = [
    { name: 'فرع الرياض', code: 'NY' },
    { name: 'فرع جدة', code: 'RM' },
    { name: 'فرع الدمام', code: 'LDN' } ]
    age = [
    { name: '1', code: 'NY' },
    { name: '2', code: 'RM' },
    { name: '3', code: 'LDN' } ]

  Date: any; 
  Type: any;
  Status: any;
  Country: any;
  Noticeage: any;

  
  resetForm(): void {
  
    if(this.myForm.valid){
      console.log("form valid:", this.myForm);
      this.myForm.reset();
    }
    else {
      console.log("form invalid:",this.myForm);
      
    }
  
  }

 
  printPage(): void {
    window.print();
  }
}
