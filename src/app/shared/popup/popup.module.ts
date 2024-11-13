import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InputPopupComponent } from './input-popup/input-popup.component';
import { InputsModule } from '../inputs/inputs.module';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { PopupCardComponent } from './popup-card/popup-card.component';
import { RefusePopupComponent } from './refuse-popup/refuse-popup.component';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { ConfirmrefuseComponent } from './confirmrefuse/confirmrefuse.component';
import { ReactiveFormsModule }  from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';
import { RedirectPopupComponent } from './redirect-popup/redirect-popup.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    InputPopupComponent,
    TestComponent,
    PopupCardComponent,
    RefusePopupComponent,
    SuccessPopupComponent,
    ConfirmrefuseComponent,
    RedirectPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  exports:[
    InputPopupComponent,
    PopupCardComponent,
    RefusePopupComponent,
    SuccessPopupComponent,
    RedirectPopupComponent,
    ConfirmrefuseComponent
  ]
})
export class PopupModule { }
