import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { StepperService } from '../stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  
  activeDivs: number[] = [];


  titleArr = ['تصنيف البلاغ','نوع البلاغ','بيانات البلاغ','معاينة البلاغ']
  @Input() isdatastepValid:boolean = false;
  constructor(public formStepNum:StepperService){}
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
  receiveActiveDivs(activeDivs: number[]): void {
    this.activeDivs = activeDivs;
  }

  scrollToStepComponent() {
    console.log("salma");
    
    var stepComponent = document.querySelector('.form-step-active');
    if (stepComponent) {
      stepComponent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Call the function when the page is reloaded
  // window.addEventListener('load', scrollToStepComponent);
}


