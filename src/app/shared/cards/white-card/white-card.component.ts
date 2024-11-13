import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepperService } from '../../stepper/stepper.service';

@Component({
  selector: 'app-white-card',
  templateUrl: './white-card.component.html',
  styleUrls: ['./white-card.component.css']
})
export class WhiteCardComponent {

  constructor(public formStepNum:StepperService){}
  @Input() title:string = 'تصنيف البلاغ'
  @Input() divs:string[] = ['غسل اموال او تمويل إرهاب','مخالفة لمدونة قواعد السلوك'];
  @Input() cord:boolean = false;
  @Input() backgroundColor:string = '#FFF';
  @Input() bordder:string = '1px solid #E6E6E6'
  @Input() href:string = '';
  @Output() accordionToggled = new EventEmitter<boolean>();

  @Input() redirectPageNo:number = 0;
  isOpen:boolean = false;
  accordionId: string = `accordion-${Math.random().toString(36).substr(2, 9)}`;
  headerId: string = `header-${Math.random().toString(36).substr(2, 9)}`;
  collapseId: string = `collapse-${Math.random().toString(36).substr(2, 9)}`;

  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
    this.accordionToggled.emit(this.isOpen);
  }

  redirect(number:number){
    // go to formstep
    const formSteps = document.getElementsByClassName("form-step");
    const formStepsArray = Array.from(formSteps);
    formStepsArray.forEach(formStep => {
    formStep.classList.contains("form-step-active") &&
    formStep.classList.remove("form-step-active");
    });
    formStepsArray[number].classList.add("form-step-active");

    //add style to word and icon 
    const progressSteps = document.getElementsByClassName("progress-step");
    const progressStepsArray = Array.from(progressSteps)
    progressStepsArray.forEach((progressStep, index)=> {
      if(index < number + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
    
    //add style to line between steps
    const progress = document.getElementsByClassName("progress");
    const progressActive = document.querySelectorAll(".progress-step-active");
    const firstProgressElement = progress[0] as HTMLElement;
    firstProgressElement.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
    firstProgressElement.style.backgroundColor = '#33835C';

    this.formStepNum.setFormStepsNum(number);
    
  }
}
