import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferencesComponent } from './references/references.component';
import { ReferenceDetailsComponent } from './reference-details/reference-details.component';

const routes: Routes = [
  {path:'',component:ReferencesComponent},
  {path:'report-references',component:ReferencesComponent},
  {path:':id',component: ReferenceDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportReferencesRoutingModule { }
