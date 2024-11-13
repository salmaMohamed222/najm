import { Component, Input, Optional, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkStepper } from '@angular/cdk/stepper';


@Component({
  selector: 'app-full-button',
  templateUrl: './full-button.component.html',
  styleUrls: ['./full-button.component.css']
})
export class FullButtonComponent {
  constructor(public dialog: MatDialog) {}
  @Input() title:string = ''
  @Input() type:string = 'button'
  @Input() enable:boolean = true;
  @Input() icon:string = ''
  @Input() array:any[] = [];
  @Input() method: (() => void | undefined) | undefined; // Define a method input 
  // @Input() @Optional() stepper: CdkStepper | undefined;

}
