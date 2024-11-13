import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-white-button',
  templateUrl: './white-button.component.html',
  styleUrls: ['./white-button.component.css']
})
export class WhiteButtonComponent {
 @Input() title:string = 'fghj';
}
