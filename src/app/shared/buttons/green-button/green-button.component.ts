import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.css']
})
export class GreenButtonComponent {
  @Input() title:string = 'إعادة تهيئة'; 
  @Input() paddingg:string = '0px 15px';
  @Input() icon:string = '';
  @Input() borderRadius = '5px';
  @Input() fontSize = '15px';
  @Input() fontWeight = '500';
  @Input() isdisabled = false;

  @Input() functionOnClick: (() => void) | undefined;
}
