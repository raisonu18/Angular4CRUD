import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../shared/employee-model';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css'],
  providers: [EmployeeService, EmployeeModel],
})
export class EmployeeViewComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService, public router: Router) { }

  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employeeService.employeeList = data;
    }, (error) => {
      this.toastr.error("Error to load product list.", 'Product');
    });
  }

}
