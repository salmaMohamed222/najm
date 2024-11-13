import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  
  @Input() paddingg:string = '24px 32px';
  @Input() cord:boolean = true;
  @Input() title: string = 'تصنيف البلاغ';
  @Output() accordionToggled = new EventEmitter<boolean>();
  isOpen: boolean = true;
  accordionId: string = `accordion-${Math.random().toString(36).substr(2, 9)}`;
  headerId: string = `header-${Math.random().toString(36).substr(2, 9)}`;
  collapseId: string = `collapse-${Math.random().toString(36).substr(2, 9)}`;

  toggleAccordion(icon: HTMLImageElement): void {
    this.isOpen = !this.isOpen;
    this.accordionToggled.emit(this.isOpen);
    
    if (this.isOpen) {
      icon.src = "assets/cordicon.svg";
    } else {
      icon.src = "assets/corddown.svg";
    }
  }

}

