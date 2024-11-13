import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reports-details',
  templateUrl: './reports-details.component.html',
  styleUrls: ['./reports-details.component.css']
})
export class ReportsDetailsComponent {
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const reportNo = params.get('reportNo');
      console.log(reportNo);
    });
  }
  ngOnInit(): void {
  
  }
}
