import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ButtonsModule } from '../buttons/buttons.module';


@NgModule({
    declarations: [
        StepperComponent
    ],
    exports: [
        StepperComponent,
        CdkStepperModule,
        MatStepperModule,
        MatIconModule
    ],
    imports: [
        CommonModule,
        StepperRoutingModule,
        CdkStepperModule,
        MatStepperModule,
        MatIconModule,
        MatProgressBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTabsModule,
        MatCardModule,
        ButtonsModule,
    ]
})
export class StepperModule { }
