import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportClassificationComponent } from '../report-classification/report-classification.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnDestroy{

  constructor(private _formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {}

  @ViewChild('reportClassification') reportClassification!: ReportClassificationComponent;
  activeDivsSubscription: Subscription | null = null;
  activeDivsData: number[] = [];
  // ngAfterViewInit() {
  //   this.activeDivsSubscription = this.reportClassification.activeDivsChange.subscribe((activeDivs: number[]) => {
  //     console.log('Updated activeDivs:', activeDivs);
  //     this.activeDivsData = activeDivs;
  //     this.cdr.detectChanges(); // Manually trigger change detection
  //   });
  // }
  
  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.activeDivsSubscription) {
      this.activeDivsSubscription.unsubscribe();
    }
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  
}
