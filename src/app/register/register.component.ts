import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup = this.createForm
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void { }

  get createForm(): FormGroup {
    return this.fb.group({
      'fullname': [, Validators.required],
      'email': [, Validators.required],
      'password': [, Validators.required],
      'repassword': [,Validators.required]
    })
  }

  async signUp() {
    let loginObj = this.loginForm.getRawValue();

    try {
      if(loginObj.password !== loginObj.repassword) return;

      let res = await this.auth.createUser(loginObj);
      
      localStorage.setItem('token', res.data.access_token);

      this.router.navigate(['complete-registry']);
    } catch (e) {
      console.error(e)
    }
  }
}
