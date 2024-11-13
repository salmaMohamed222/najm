import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent {
//  @Input() method:()=> void = function() {};
 @Input() methodToExecute: () => void = () => {};
 @Input() placeholder:string = 'اسم الشخص'
 @Input() name:string = ''

 executeMethod() {
  this.methodToExecute();
}

}
