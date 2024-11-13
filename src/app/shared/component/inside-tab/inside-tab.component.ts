import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inside-tab',
  templateUrl: './inside-tab.component.html',
  styleUrls: ['./inside-tab.component.css']
})
export class InsideTabComponent {
  // index: number = 0;
    // changeTab(tabIndex: any) {
  //   this.index = tabIndex
  //  }
  
  // @Input() appearTab:boolean = true
  // tabsArray: Observable<string[]> | undefined; 

 @Input() tabsArray: string[] = [];
 activatedTab:number = 0;
 @Output() onTabChange = new EventEmitter<number>();




   setTab(index:number) {
    this.activatedTab = index
    this.onTabChange.emit(this.activatedTab);
   }
  
}
