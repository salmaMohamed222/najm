import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visitor-structure',
  templateUrl: './visitor-structure.component.html',
  styleUrls: ['./visitor-structure.component.css']
})
export class VisitorStructureComponent {
 @Input() subtitle:string = 'يمكنك تحديد أكثر من إختيار'
}
