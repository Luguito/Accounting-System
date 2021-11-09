import { Component, OnInit, Input } from '@angular/core';
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
  @Input() complete: boolean = false;
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
      let res = await this.cp.createCompany(this.companyForm.getRawValue());
      console.log(res);
      this.router.navigate(['app/dashboard'])
    } catch (e) {
      console.error(e);
    }
  }
}
