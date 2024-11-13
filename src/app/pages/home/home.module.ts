import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { ButtonsModule } from 'src/app/shared/buttons/buttons.module';
import { AboutComponent } from '../visitor/about/about.component';
import { InputsModule } from 'src/app/shared/inputs/inputs.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsModule,
    ButtonsModule,
    InputsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
