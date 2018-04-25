import { Injectable } from '@angular/core';
import { RegistrationModel } from './registration-model'
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistrationService {
  model = RegistrationModel;
  constructor(private http: Http) { }
  postRegistration(reg: RegistrationModel) {
    var body = JSON.stringify(reg);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('url', body, requestOptions).map(x => x.json());
  }

}
