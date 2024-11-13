import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colored-card',
  templateUrl: './colored-card.component.html',
  styleUrls: ['./colored-card.component.css']
})
export class ColoredCardComponent {
  @Input() title:string = 'بلاغات مغلقة';
  @Input() number:string = '';
  @Input() desc:string = '';
  @Input() image:string = '';
  @Input() backgroundColor:string = '#5F5F5F';
}
