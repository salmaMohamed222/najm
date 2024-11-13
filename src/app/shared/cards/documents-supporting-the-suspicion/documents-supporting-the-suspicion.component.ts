import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-documents-supporting-the-suspicion',
  templateUrl: './documents-supporting-the-suspicion.component.html',
  styleUrls: ['./documents-supporting-the-suspicion.component.css']
})
export class DocumentsSupportingTheSuspicionComponent {
  @Input() cord:boolean = false;
  @Input() background_color: string = '#F6F6F6';
}
