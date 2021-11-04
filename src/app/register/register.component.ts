import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
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
      'password': [, Validators.required]
    })
  }

  async signUp() {
    try {
      let res = await this.auth.createUser(this.loginForm.getRawValue());
      console.log(res);
      localStorage.setItem('token', JSON.stringify(res.data.access_token))
      this.router.navigate(['app/register-company']);
    } catch (e) {
      console.error(e)
    }
  }
}
