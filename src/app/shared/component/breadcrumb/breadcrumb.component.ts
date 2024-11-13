import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
 @Input() href:string = '/home'
 @Input() page:string|null = null;
 @Input() subpage:string = '';
 @Input() colorr:string = '#1e1e1e' 
}
