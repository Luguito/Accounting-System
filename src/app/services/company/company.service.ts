import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiString: string = "https://accountingsystemco.herokuapp.com/api/";
  constructor(private http: HttpClient) { }

  createCompany(company: ICompany): Promise<any> {
    return this.http.post(this.apiString + 'company', company).toPromise()
  }
}

interface ICompany {
  name: string,
  address: string,
  country: string,
  city: string,
  estate: string,
  website: string
}