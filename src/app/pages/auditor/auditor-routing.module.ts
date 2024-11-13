import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsDetailsComponent } from './reports-details/reports-details.component';

const routes: Routes = [
  // {path:'',component:ReportsComponent},
  // {path:'auditor',component:ReportsComponent},
  // {path:':id',component: ReportsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditorRoutingModule { }
