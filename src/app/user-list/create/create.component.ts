import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '@services';
import { Router } from '@angular/router'
@Component({
  selector: 'app-create-roller',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  userSellerForm: FormGroup = this.initUserForm;
  constructor(private us: UsersService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void { }

  get initUserForm() {
    return this.fb.group({
      fullname: [],
      email: []
    })
  }

  async createUser() {
    try {
      this.router.navigate(['app/list-users-seller']);
      let res = await this.us.createUserSeller(this.userSellerForm.getRawValue());

    } catch (e) {
      console.error(e)
    }
  }
} 
