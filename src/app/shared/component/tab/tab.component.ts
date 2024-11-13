import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() primaryTitle:string = 'إجمالي الحوادث'
  @Input() secondaryTitle:string = ''
  @Input() appearTab:boolean = true
  @Input() Padding:string = '20px'
  @Input() titleAppear:boolean = true
  @Input() backgroundColor:string = '#EFEFEF'
  index: number = 1;

  changeTab(tabIndex: any) {
    this.index = tabIndex
   }
}
