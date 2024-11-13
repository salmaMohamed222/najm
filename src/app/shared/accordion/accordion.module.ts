import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    AccordionRoutingModule
  ],
  exports:[
    AccordionComponent,
  ]
})
export class AccordionModule { }
