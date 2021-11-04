import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiString: string = "https://accountingsystemco.herokuapp.com/api/user/";
  constructor(private http: HttpClient) { }

  createUserSeller(user: IUsers): Promise<any> {
    return this.http.post(this.apiString + 'seller', user).toPromise()
  }

  getUserSeller(){
    return this.http.get(this.apiString + 'seller').toPromise();
  }
}


interface IUsers {
  fullname: string,
  email: string
}