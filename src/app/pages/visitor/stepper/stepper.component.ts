import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessPopupComponent } from 'src/app/shared/popup/success-popup/success-popup.component';
import { StepperService } from 'src/app/shared/stepper/stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit{
  activeDivs: number[] = [];
  activeTypeDivs:number[] = [];
  isFormValid: boolean = false;

  
  titleArr = ['تصنيف البلاغ','نوع البلاغ','بيانات البلاغ','معاينة البلاغ']
  @Input() isdatastepValid:boolean = false;
  constructor(public formStepNum:StepperService,public dialog:MatDialog){}
  // formStepsNum:number = this.formStepNum.getFormStepsNum();
  formStepsNum:number=0 ;
  nextBtns = document.getElementsByClassName("btn-next");
  prevBtns = document.getElementsByClassName("btn-prev");
  progress = document.getElementsByClassName("progress");
  formSteps = document.getElementsByClassName("form-step");
  progressSteps = document.getElementsByClassName("progress-step");
  stepLabel = document.getElementsByClassName("step-label");
  stepsNoIcon = document.getElementsByClassName('progressBefore');
  stepsComplIcon = document.getElementsByClassName('appear');


  onNextFunction: (() => void) | undefined;
  onPrevFunction:(() => void) | undefined;

  ngOnInit(): void {
    
  this.formStepNum.formStepsNum$.subscribe((w)=>{
  this.formStepsNum=w
  
})

const onNextFunction = () => {

  var stepComponent = document.querySelector('.form-step-active');
  if (stepComponent) {
    stepComponent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  this.formStepsNum++;
  this.styleFunction();
  //  this.updateIcon(this.formStepsNum);
  const firststepsNoIconArray = this.stepsNoIcon[this.formStepsNum - 1] as HTMLElement;
  const firststepsComplIconArray = this.stepsComplIcon[this.formStepsNum - 1] as HTMLElement;
  firststepsNoIconArray.style.display='none';
  firststepsComplIconArray.style.display='block';

  this.styleLineBetweenSteps();    
}

const onPrevFunction = () => {
  var stepComponent = document.querySelector('.form-step-active');
  if (stepComponent) {
    stepComponent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  this.formStepsNum--;
  this.styleFunction();
  // this.updateIcon(this.formStepsNum);
  const firststepsNoIconArray = this.stepsNoIcon[this.formStepsNum] as HTMLElement;
  const firststepsComplIconArray = this.stepsComplIcon[this.formStepsNum] as HTMLElement;
  firststepsNoIconArray.style.display='block';
  firststepsComplIconArray.style.display='none';

  this.styleLineBetweenSteps();
}

this.onPrevFunction = onPrevFunction;
this.onNextFunction = onNextFunction;

  }
  updateFormsSteps(number:number) {
      const formStepsArray = Array.from(this.formSteps);
      formStepsArray.forEach(formStep => {
      formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
      });
      formStepsArray[number].classList.add("form-step-active");
  }
  updateProgressBar(number:number) {
    const progressStepsArray = Array.from(this.progressSteps)
    progressStepsArray.forEach((progressStep, index)=> {
      if(index < number ) {
        progressStep.classList.add("progress-step-active");
      }
      if(index < number + 1) {
        progressStep.classList.add("step-active");
      }
      else {
        progressStep.classList.remove("progress-step-active");
        if(index < number + 1) {
          progressStep.classList.add("step-active");
         }
         else {
          progressStep.classList.remove("step-active");
         }
      }
    });
  }
  styleLineBetweenSteps() {
    const progressActive = document.querySelectorAll(".progress-step-active");
    const firstProgressElement = this.progress[0] as HTMLElement;
    firstProgressElement.style.width = ((progressActive.length) / (this.progressSteps.length - 1)) * 100 + "%";
    firstProgressElement.style.backgroundColor = '#33835C';
  }
  updateStepLabel(number:number) {
    const stepLabelArray = Array.from(this.stepLabel)
    stepLabelArray.forEach((progressStep, index)=> {
      if(index < number + 1) {
        progressStep.classList.add("step-label-active");
      } else {
        progressStep.classList.remove("step-label-active");
      }
    });
  }
  
  styleFunction() {
    this.updateFormsSteps(this.formStepsNum);
    this.updateProgressBar(this.formStepsNum);
    this.updateStepLabel(this.formStepsNum);
  }


// Output Validation Event
  receiveActiveDivs(activeDivs: number[]): void {
    this.activeDivs = activeDivs;
  }
  receiveActiveTypeDivs(activeTypeDivs: number[]): void {
    this.activeTypeDivs = activeTypeDivs;
  }

  onFormValidityChange(isValid: boolean): void {
    this.isFormValid = isValid;
  }
  submit(){
    const stepLabelArray = Array.from(this.stepLabel)
    stepLabelArray[this.formStepsNum].classList.add("step-label-active");
    const progressStepsArray = Array.from(this.progressSteps)
    progressStepsArray[this.formStepsNum].classList.add("progress-step-active");
    progressStepsArray[this.formStepsNum].classList.add("step-active");
    const firststepsNoIconArray = this.stepsNoIcon[this.formStepsNum] as HTMLElement;
    const firststepsComplIconArray = this.stepsComplIcon[this.formStepsNum] as HTMLElement;
    firststepsNoIconArray.style.display='none';
    firststepsComplIconArray.style.display='block';
    this.openDialog();
  }
  openDialog() {
    this.dialog.open(SuccessPopupComponent, {
      data: { successtype: 'تأكيد ' , route: '/visitor',content:'و سيتم مراجعته من قبل المختصين شكراً لتعاونكم !'},
    });
  } 
}
