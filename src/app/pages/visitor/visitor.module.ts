import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { AboutComponent } from './about/about.component';
import { ReportClassificationComponent } from './report-classification/report-classification.component';
import { ReportDataComponent } from './report-data/report-data.component';
import { ReportTypeComponent } from './report-type/report-type.component';
import { ReportsComponent } from './reports/reports.component';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { ButtonsModule } from 'src/app/shared/buttons/buttons.module';
import { CoreModule } from 'src/app/shared/core/core.module';
// import { StepperModule } from 'src/app/shared/stepper/stepper.module';
import { InputsModule } from 'src/app/shared/inputs/inputs.module';
import { FormsModule,  } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgIf} from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReportPreviewComponent } from './report-preview/report-preview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupModule } from 'src/app/shared/popup/popup.module';
import { StepperComponent } from './stepper/stepper.component';
import { ComponentModule } from 'src/app/shared/component/component.module';


@NgModule({
  declarations: [
    AboutComponent,
    ReportClassificationComponent,
    ReportDataComponent,
    ReportTypeComponent,
    ReportsComponent,
    ReportPreviewComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    CardsModule,
    ButtonsModule,
    CoreModule,
    // StepperModule,
    InputsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
    ButtonsModule,
    ReactiveFormsModule,
    PopupModule,
    ComponentModule
  ],
  exports:[
    AboutComponent,
    ReportClassificationComponent,
    ReportsComponent,
    ReportDataComponent,
    ReportTypeComponent,
    ReportPreviewComponent,
    StepperComponent
  ],

})
export class VisitorModule { }
