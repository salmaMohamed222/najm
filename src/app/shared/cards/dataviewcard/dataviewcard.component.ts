import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dataviewcard',
  templateUrl: './dataviewcard.component.html',
  styleUrls: ['./dataviewcard.component.css']
})
export class DataviewcardComponent {
  @Input() backgroundColor :string = '';
  @Input() borderr :string = '';
  @Input() paddingg :string = '';
}
