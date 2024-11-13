import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-front-button',
  templateUrl: './front-button.component.html',
  styleUrls: ['./front-button.component.css']
})
export class FrontButtonComponent {
  constructor() {}
  @Input() title:string = ''
  @Input() type:string = 'button'
  @Input() enable:boolean = true;
  @Input() icon:string = ''
  @Input() array:any[] = [];
  @Input() method: (() => void | undefined) | undefined; // Define a method input 
}
