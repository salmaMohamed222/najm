import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsAuditorRoutingModule } from './reports-auditor-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { ReportsDetailsComponent } from './reports-details/reports-details.component';
import { InputsModule } from 'src/app/shared/inputs/inputs.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { ButtonsModule } from 'src/app/shared/buttons/buttons.module';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AccordionModule } from 'src/app/shared/accordion/accordion.module';
import { ComponentModule } from 'src/app/shared/component/component.module';


@NgModule({
  declarations: [
    ReportsComponent,
    ReportsDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportsAuditorRoutingModule,
    InputsModule,
    CardsModule,
    ButtonsModule,
    PaginatorModule,
    TableModule,
    MatPaginatorModule,
    AccordionModule,
    ComponentModule,
    InputsModule
  ],
  exports:[
    ReportsComponent,
    ReportsDetailsComponent
  ]
})
export class ReportsAuditorModule { }
