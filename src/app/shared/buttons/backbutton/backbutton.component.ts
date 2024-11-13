import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.css']
})
export class BackbuttonComponent {
  @Input() title:string = ''
  @Input() type:string = 'button'
  @Input() enable:boolean = true;
  @Input() icon:string = ''
  @Input() array:any[] = [];
  @Input() method: (() => void | undefined) | undefined; // Define a method input 
}
