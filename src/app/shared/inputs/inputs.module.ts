import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectComponent } from './select/select.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { TextareaComponent } from './textarea/textarea.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextinputComponent } from './textinput/textinput.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
// import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CalendarComponent,
    SelectComponent,
    UploadFileComponent,
    TextareaComponent,
    InputGroupComponent,
    TextinputComponent
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule,
    DropdownModule,
    DynamicDialogModule,
    // ToastModule
  ],
  exports:[
    SelectComponent,
    CalendarComponent,
    TextareaComponent,
    InputGroupComponent,
    UploadFileComponent
  ]
})
export class InputsModule { }
