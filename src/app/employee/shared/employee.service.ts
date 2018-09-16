import { Injectable } from '@angular/core';
import { EmployeeModel } from './employee-model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
  model = EmployeeModel;
  employeeList: EmployeeModel[];
  constructor(private http: Http) { }
  CreateEmployee(employeeModel: EmployeeModel) {
    var body = JSON.stringify(employeeModel);
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:51498/api/Employee/Create', body, requestOptions);
  }
  getEmployeeList() {
    var headerOptions = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get('http://localhost:51498/api/Employee/list', { headers: headerOptions })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  getEmployee(id) {
    var headerOptions = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get('http://localhost:51498/api/Employee/edit/' + id, { headers: headerOptions })
      .map((res: Response) => res.json());
  }
  UpdateEmployee(employeeModel: EmployeeModel) {
    var body = JSON.stringify(employeeModel);
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:51498/api/Employee/update', body, requestOptions);
  }
  handleError(error: Response) {
    return Observable.throw(error);
  };
}
