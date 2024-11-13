import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { ReportsDetailsComponent } from './reports-details/reports-details.component';

const routes: Routes = [
  {path:'',component:ReportsComponent},
  {path:'report-auditor',component:ReportsComponent},
  {path:':id',component: ReportsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsAuditorRoutingModule { }
