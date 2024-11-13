import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportReferencesRoutingModule } from './report-references-routing.module';
import { ReferencesComponent } from './references/references.component';
import { ReferenceDetailsComponent } from './reference-details/reference-details.component';
import { InputsModule } from 'src/app/shared/inputs/inputs.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ButtonsModule } from 'src/app/shared/buttons/buttons.module';
import { AccordionModule } from 'src/app/shared/accordion/accordion.module';
import { ComponentModule } from 'src/app/shared/component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReferencesComponent,
    ReferenceDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportReferencesRoutingModule,
    InputsModule,
    CardsModule,
    ButtonsModule,
    PaginatorModule,
    TableModule,
    MatPaginatorModule,
    AccordionModule,
    ComponentModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReferencesComponent,
    ReferenceDetailsComponent
  ]
})
export class ReportReferencesModule { }
