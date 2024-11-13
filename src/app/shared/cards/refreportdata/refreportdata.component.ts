import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-refreportdata',
  templateUrl: './refreportdata.component.html',
  styleUrls: ['./refreportdata.component.css']
})
export class RefreportdataComponent {

  // private authServiceSubscription: Subscription | undefined;
  @Input() userRole:string = 'المراجع';
  @Input() name:string = 'محمد الرائد';
  // constructor(private route: ActivatedRoute, public user:AuthService) {}
  activatedTabIndex:number = 0;

  @Input() backgroundColor :string = '';
  @Input() borderr :string = '';
  @Input() paddingg :string = '';

  ngOnInit(): void {

  }
 
}
