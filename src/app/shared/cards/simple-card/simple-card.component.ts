import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardComponent {
  activeDivs: number[] = [];
  @Input() divNumber:number | null = null;
  @Input() cardTitle:string | null = null;
  @Input() icon:string |null = null;

  toggleActive() {
    if (this.divNumber !== null && this.divNumber !== undefined) {
      const index = this.activeDivs?.indexOf(this.divNumber);
      if (index === -1) {
        this.activeDivs?.push(this.divNumber);
      } else {
        this.activeDivs?.splice(index, 1);
      }
    }

  }
}
