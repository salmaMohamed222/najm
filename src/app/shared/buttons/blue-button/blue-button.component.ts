import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.css']
})
export class BlueButtonComponent {
  @Input() title:string = 'إعادة تهيئة'
  @Input() paddingg:string = '0px 15px'

}
