import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'visitor',component:AboutComponent},
  {path:'reports',component: ReportsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
