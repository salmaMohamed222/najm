import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
} 

type Report = {
  reportNo: string;
  reportType: string;
  reportDate: string;
  reportAge: string;
  country: string;
  adminst: string;
  status: string;
}; 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private router: Router) {}

 
  viewReport(reportNo: string) {
    this.router.navigate(['report-references', reportNo]);
  }

  reports:Report[] = [
    {reportNo:'# 123',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'تحت الدراسة'},
    {reportNo:'# 124',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مغلقة'},
    {reportNo:'# 125',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'جديد'},
    {reportNo:'# 126',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مقبول'},
    {reportNo:'# 127',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مرفوض'},
    {reportNo:'# 128',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'جديد'},
    {reportNo:'# 123',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'تحت الدراسة'},
    {reportNo:'# 124',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مغلقة'},
    {reportNo:'# 125',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'جديد'},
    {reportNo:'# 126',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مقبول'},
    {reportNo:'# 127',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مرفوض'},
    {reportNo:'# 128',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'جديد'},
    {reportNo:'# 123',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'تحت الدراسة'},
    {reportNo:'# 124',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مغلقة'},
    {reportNo:'# 125',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'جديد'},
    {reportNo:'# 126',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مقبول'},
    {reportNo:'# 127',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'مرفوض'},
    {reportNo:'# 128',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'جديد'},
    {reportNo:'# 129',reportType:'غسل اموال او تمويل...',reportDate:'23-12-2023',reportAge:'3 أيام',country:'الرياض',adminst:'إدارة الرياض',status:'تحت الدراسة'},
  ]

  p:number = 1;
  reportsPerPage:number = 8;
  // totalItems:any;

  first: number = 0;
  rows: number = 5;
  pageCount: number = Math.ceil(this.reports.length / this.rows); //totalItems
  activePage: number = 1;
  isActive: boolean = false;
  // selector: HTMLElement | null  = document.querySelector(`::ng-deep .p-paginator-pages > button:nth-child(${this.activePage + 1})`);
  // elements = document.querySelectorAll(`.p-paginator-pages > button:nth-child(${this.activePage + 1})`);

  getPaginatedReports(): Report[] {
    const startIndex = this.first;
    const endIndex = startIndex + this.rows;
    return this.reports.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    if (event.page !== undefined) {
      this.activePage = event.page + 1; //+1 because the page numbers are 0-indexed
      // this.selector!.style.border = '2px solid red';
      // const elements = document.getElementsByClassName(`.p-paginator-pages > button`);
      // const elementArray = Array.from(elements);
      // for(let element of elementArray) {
      //     element.style.border = '2px solid red'
      // }
      
    }
    if (event.first !== undefined && event.page !== undefined) {
      this.first = event.first;
      this.activePage = event.page + 1;
      
    }
    if (event.rows !== undefined) {
      this.rows = event.rows;
      this.pageCount = Math.ceil(this.reports.length / this.rows);
    }
  }
}
