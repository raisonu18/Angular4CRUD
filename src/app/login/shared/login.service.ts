import { Injectable } from '@angular/core';
import { LoginModel } from './login-model'
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  model = LoginModel;
  constructor(private http: Http) { }
  postLogin(login: LoginModel) {
    var body = JSON.stringify(login);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:51498/api/user/login', body, requestOptions).map(x => x.json());
  }

}
