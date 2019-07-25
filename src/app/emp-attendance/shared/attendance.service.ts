import { Injectable } from '@angular/core';
import { AttendanceModel } from './attendance-model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  model = AttendanceModel;
  employeeAttendanceList: AttendanceModel[];
  constructor(private http: Http) { }

  getAttendanceList() {
    var headerOptions = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get('http://localhost:51498/api/Attendance/list', { headers: headerOptions })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  TakeAttendance(model: AttendanceModel) {
    model.inTimeSpan = model.inTime.getHours().toString() + ":" + model.inTime.getMinutes().toString();
    model.ouTTimeSpan = model.ouTTime.getHours().toString() + ":" + model.ouTTime.getMinutes().toString();
    var body = model;
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:51498/api/Attendance/Submit', body, requestOptions);
  }
  getEmployeeAttendanceList() {
    var headerOptions = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get('http://localhost:51498/api/Employee/Attendance/list', { headers: headerOptions })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  handleError(error: Response) {
    return Observable.throw(error);
  };
}
