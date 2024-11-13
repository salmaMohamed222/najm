import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private _userRole: string = '';
  private _username: string = '';

  // BehaviorSubject to emit changes in userRole
  private _userRole$ = new BehaviorSubject<string>('');

  // Observable to subscribe to changes in userRole
  userRole$ = this._userRole$.asObservable();

  // Getter and setter for userRole
  get userRole(): string {
    return this._userRole;
  }

  set userRole(value: string) {
    this._userRole = value;
    // Emit the updated value to subscribers
    this._userRole$.next(value);
  }

  // Getter and setter for username
  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

}
