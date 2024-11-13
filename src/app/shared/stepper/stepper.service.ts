import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  constructor() { }
  private formStepsNum = new BehaviorSubject<number>(0)
   formStepsNum$ = this.formStepsNum.asObservable()
  
  setFormStepsNum(step:number):void {
    this.formStepsNum.next(step)
  }

}
