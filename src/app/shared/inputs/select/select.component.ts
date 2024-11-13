import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

interface City {
  
  name: string;
  code: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})


export class SelectComponent {
  
 @Input() title:string = '';
 @Input() name:string = '';
 @Input() options: City[] | undefined;
 @Input() select: any = '';
 @Input() control: FormControl = new FormControl('');
 @Input() onhide: any;
//  formGroup: any;

 cities: City[] | any = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
];


}

