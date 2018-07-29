import { Injectable } from '@angular/core';
import { ContactModel } from './contact-model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
  model = ContactModel;
  contactList: ContactModel[];
  constructor(private http: Http) { }
  CreateContact(contactModel: ContactModel) {
    var body = JSON.stringify(contactModel);
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:51498/api/Contact/Create', body, requestOptions);
  }
  getContactList() {
    var headerOptions = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get('http://localhost:51498/api/Contact/list', { headers: headerOptions })
      .map((res: Response) => res.json());
  }
  getContac(id) {
    var headerOptions = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get('http://localhost:51498/api/Contact/edit/' + id, { headers: headerOptions })
      .map((res: Response) => res.json());
  }
  UpdateContact(contactModel: ContactModel) {
    var body = JSON.stringify(contactModel);
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:51498/api/Contact/update', body, requestOptions);
  }
}
