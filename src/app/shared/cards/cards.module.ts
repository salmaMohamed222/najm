import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { ColoredCardComponent } from './colored-card/colored-card.component';
import { WhiteCardComponent } from './white-card/white-card.component';
import { GrayestablishcardComponent } from './grayestablishcard/grayestablishcard.component';
import { GrayCardComponent } from './gray-card/gray-card.component';
import { DataviewcardComponent } from './dataviewcard/dataviewcard.component';
import { DocumentsSupportingTheSuspicionComponent } from './documents-supporting-the-suspicion/documents-supporting-the-suspicion.component';
import { AccordionComponent } from '../accordion/accordion/accordion.component';
import { AccordionModule } from '../accordion/accordion.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ComponentModule } from '../component/component.module';
import { TabCardComponent } from './tab-card/tab-card.component';
import { RefreportdataComponent } from './refreportdata/refreportdata.component';
import { AuditorrepdataComponent } from './auditorrepdata/auditorrepdata.component';
import { audit } from 'rxjs';
import { PhotoAndFilesComponent } from './photo-and-files/photo-and-files.component';
import { VisitorStructureComponent } from './visitor-structure/visitor-structure.component';


@NgModule({
  declarations: [
    SimpleCardComponent,
    ColoredCardComponent,
    WhiteCardComponent,
    GrayestablishcardComponent,
    GrayCardComponent,
    DataviewcardComponent,
    DocumentsSupportingTheSuspicionComponent,
    TabCardComponent,
    RefreportdataComponent,
    AuditorrepdataComponent,
    PhotoAndFilesComponent,
    VisitorStructureComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    AccordionModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    ComponentModule
  ],
  exports:[
    SimpleCardComponent,
    ColoredCardComponent,
    WhiteCardComponent,
    GrayestablishcardComponent,
    DataviewcardComponent,
    DocumentsSupportingTheSuspicionComponent,
    TabCardComponent,
    AuditorrepdataComponent,
    RefreportdataComponent,
    PhotoAndFilesComponent,
    VisitorStructureComponent
  ]
})
export class CardsModule { }
