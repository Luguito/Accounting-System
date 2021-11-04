import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyForm: FormGroup = this.initCompanyForm;
  constructor(private cp: CompanyService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void { }


  get initCompanyForm() {
    return this.fb.group({
      "name": [],
      "address": [],
      "country": [],
      "city": [],
      "estate": [],
      "website": []
    })
  }

  async createCompany() {
    try {
      this.router.navigate(['app/register-user-seller'])
      let res = await this.cp.createCompany(this.companyForm.getRawValue());
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }
}
