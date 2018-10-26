import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../Models/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  private urlLogin = 'http://localhost:8080/login';
  constructor(private http: HttpClient) { }

  public getLoginAuth(login: Login) {
    return this.http.post(this.urlLogin, login);
    // this.http.post(this.urlLogin, login).subscribe(data => {
    //   console.log(data);
    //   // if (data != null) {
    //   //   this.loginCredential.next(data);
    //   // } else {
    //   //   this.loginCredential.next('error');
    //   // }
    // });
  }
}
