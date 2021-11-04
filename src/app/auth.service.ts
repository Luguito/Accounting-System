import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiString: string = "https://accountingsystemco.herokuapp.com/api/auth/"
  constructor(private http: HttpClient) { }

  createUser(user: User): Promise<any> {
    console.log(user)
    return this.http.post(this.apiString + 'signup', user).toPromise();
  }


}

interface User {
  fullname: string
  email: string
  password: string
}