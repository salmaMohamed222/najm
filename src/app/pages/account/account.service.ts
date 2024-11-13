import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  private currentUserSource = new BehaviorSubject<User|null>(null);
  constructor() { }
}
