import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class DashboardService {

  constructor(private http: Http) { }
  getDetail() {
    var headerOptions = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get('http://localhost:51498/api/user/detail', { headers: headerOptions });
  }
}
