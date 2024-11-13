import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-green-border',
  templateUrl: './green-border.component.html',
  styleUrls: ['./green-border.component.css']
})
export class GreenBorderComponent {
  @Input() title:string = 'رجوع'; 
  @Input() paddingg:string = '0px 15px';
  @Input() icon:string = 'bi bi-arrow-right';
  @Input() borderRadius = '5px';
  @Input() fontSize = '15px';
  @Input() fontWeight = '500';
  @Input() isdisabled = false;
  
  @Input() functionOnClick: (() => void) | undefined;
}
