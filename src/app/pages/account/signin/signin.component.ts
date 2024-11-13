import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { NavbarServiceService } from 'src/app/shared/core/navbar-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {

  constructor(private accountService:AccountService, private router:Router, public nav:NavbarServiceService) {
    nav.visible = false;
   }

  a:number = 0;
  hide:boolean = true; 

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  //reportref: مراجع البلاغات
  //reportauditor: مدقق البلاغات
  //auditor: مدقق الحسابات
  users:any[] = ['auditor@gmail.com','reportref@gmail.com','reportauditor@gmail.com']
  formOperation(e:Event) {
    e.preventDefault();
    const enteredEmail = this.signinForm.value.email;
    if(this.signinForm.valid) {
      console.log('Form Submitted', this.signinForm.value);
      if(this.users.includes(enteredEmail) && this.signinForm.value.password === "12345")
      {
        this.router.navigate(['/report-references']);
      }
      else {
        this.signinForm.get('email')?.setErrors({ 'emailNotFound': true });
      }

    }
    else {
      console.log('Form is not Valid');
      this.signinForm.markAllAsTouched(); 
    }

  }

  onSubmit() {
    console.log(this.signinForm.value);
  }
  get getemail() {
    return this.signinForm.controls['email'];
  }
  get getpassword() {
    return this.signinForm.controls['password'];
  }
  pass() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const passIcon = document.getElementsByClassName('pass-icon')[0] as HTMLElement;
    if(this.a==1) {
      passwordInput.type = 'password';
      passIcon.classList.remove('bi-eye-fill');
      passIcon.classList.add('bi-eye-slash-fill');
      this.a = 0;
    }
    else {
      passwordInput.type = 'text';
      passIcon.classList.remove('bi-eye-slash-fill');
      passIcon.classList.add('bi-eye-fill');
      this.a = 1;
    }
    
  }

}
