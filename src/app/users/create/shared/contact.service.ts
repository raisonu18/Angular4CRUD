import { Injectable } from '@angular/core';
import { ContactModel } from './contact-model';
import { ContactType } from './ContactType';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
  model = ContactModel;
  enum = ContactType;
  constructor(private http: Http) { }
  CreateContact(contactModel: ContactModel) {
    var body = JSON.stringify(contactModel);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' ,'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:51498/api/Contact/Create', body, requestOptions).map(x => x.json());
  }

}
