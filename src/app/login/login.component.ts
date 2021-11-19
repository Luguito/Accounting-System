import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = this.initLoginForm;
  constructor(private fb: FormBuilder, private as: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  get initLoginForm() {
    return this.fb.group({
      'email': [],
      'password': []
    })
  }

  async logIn() {
    try {
      let res = await this.as.logInUser(this.userForm.getRawValue());
      console.log(res)
      this.router.navigate(['app/dashboard'])
    } catch (e) {
      console.error(e)
    }
  }
}
