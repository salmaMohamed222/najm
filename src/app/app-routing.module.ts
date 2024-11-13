import { ReportsAuditorModule } from './pages/reports-auditor/reports-auditor.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { InputPopupComponent } from './shared/popup/input-popup/input-popup.component';


const routes: Routes =  [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'report-auditor',loadChildren:()=>import('./pages/reports-auditor/reports-auditor.module').then(m=>m.ReportsAuditorModule)},
  {path:'visitor',loadChildren:()=>import('./pages/visitor/visitor.module').then(m=>m.VisitorModule)},
  {path:'report-references',loadChildren:()=>import('./pages/report-references/report-references.module').then(m=>m.ReportReferencesModule)},
  {path:'auditor',loadChildren:()=>import('./pages/auditor/auditor.module').then(m=>m.AuditorModule)},
  {path:'home',loadChildren:()=>import('./pages/visitor/visitor.module').then(m=>m.VisitorModule)},
  {path:'account',loadChildren:()=>import('./pages/account/account.module').then(m=>m.AccountModule)},
  // {path:'home/visitor',component:AboutComponent},
  {path:'**',redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
