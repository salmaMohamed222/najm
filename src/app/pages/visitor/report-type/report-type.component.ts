import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputPopupComponent } from 'src/app/shared/popup/input-popup/input-popup.component';

@Component({
  selector: 'app-report-type',
  templateUrl: './report-type.component.html',
  styleUrls: ['./report-type.component.css']
})
export class ReportTypeComponent {
  constructor(public dialog: MatDialog) {}
  @Output() activeTypeDivsChange:EventEmitter<number[]> = new EventEmitter<number[]>
  activeDivs: number[] = [];

  reportType:{icon:string,text:string}[] = [ 
    { icon: "downrowicon", text: "سوء استخدام السلطة او اتخاذ القرار" },
    { icon: "moneyicon", text: "احتيال او فساد او رشوة او اختلاس او تزوير" },
    { icon: "fileicon", text: "مخالفة الانظمة واللوائح والتعليمات والسياسات التى يجب اتباعها حسب مقتضيات نطاق عمل الشركة" },
    { icon: "policiyicon", text: "المخالفات المتعلقة بالبيئة والصحة والسلامة فى الشركة" },
    { icon: "existfileicon", text: "الإفصاح عن معلومات سرية بطريقة غير نظامية" },
    { icon: "existicon", text: "الإخفاء بسوء نية او الإهمال او اتلاف الوثائق الرسمية  او التستر عن التقارير المالية الاحتيالية" },
    { icon: "accidenticon", text: "التصرفات الغير لائقة المخالفة للنظام العام والأداب الإسلامية والعادات والتقاليد" },
    { icon: "caricon", text: "سوء استخدام ممتلكات الشركة" },
    { icon: "downrowicon", text: "الإهمال الجسيم الذى يترتب عليه الإضرار بالشركة" },
    { icon: "caricon", text: "التستر على اى من المخالفات أعلاه" },
    { icon: "tmrer", text: "تمرير عمليات غير نظامية او التحايل على الانظمة او التستر على أخطاء النظام" },
    { icon: "basicfileicon", text: "سوء استخدام الصلاحيات الممنوحة" },
    { icon: "downrowicon", text: "تضارب في المصالح في اي من الاعمال او العقود" },
    { icon: "caricon", text: "الحصول على منافع او مكافأت غير مستحقة" },
    { icon: "moreicon", text: "أخري..." } ]
  
  toggleActive(divNumber: number) {
    const index = this.activeDivs?.indexOf(divNumber);
    if(index === -1) {
      this.activeDivs?.push(divNumber);
    } else {
      this.activeDivs?.splice(index, 1);
    }
    console.log(this.activeDivs);
    this.activeTypeDivsChange.emit(this.activeDivs);
  }
  
  openDialog() {
    this.dialog.open(InputPopupComponent, {
      data: {
        animal: 'panda',
      },
    });
    this.toggleActive(6);
  }

  applystyle(){
    const title=document.querySelectorAll('.stepword'); 
    const icon=document.querySelectorAll('.stepicon');
    const icondata=document.querySelectorAll('.iconnn');
    const no = document.querySelectorAll('.no');
  
  
    const lines = document.querySelectorAll('.step');
    lines.forEach(line => {
      lines[1].classList.add('completed');
    });
  ( no[1] as HTMLElement).style.display = 'none';
  ( icondata[1] as HTMLElement).style.display = 'block';
  ( title[1] as HTMLElement).classList.add('laststepword');
  ( icon[1] as HTMLElement).classList.add('laststep');
  }

  removestyle() {
  const title=document.querySelectorAll('.stepword'); 
  const icon=document.querySelectorAll('.stepicon');
  const icondata=document.querySelectorAll('.iconnn');
  const no = document.querySelectorAll('.no');


  const lines = document.querySelectorAll('.step');
  lines.forEach(line => {
    lines[0 ].classList.remove('completed');
  });
( no[0 ] as HTMLElement).style.display = 'block';
( icondata[0 ] as HTMLElement).style.display = 'none';
( title[0 ] as HTMLElement).classList.remove('laststepword');
( icon[0 ] as HTMLElement).classList.remove('laststep');
  }

}
