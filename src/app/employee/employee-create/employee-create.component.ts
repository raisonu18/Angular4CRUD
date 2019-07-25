import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { EmployeeModel } from '../shared/employee-model';
import { EmployeeService } from '../shared/employee.service';
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
  providers: [EmployeeService, EmployeeModel],
})
export class EmployeeCreateComponent implements OnInit {
  model = EmployeeModel;
 
  constructor(private employeeService: EmployeeService,
    private employeeModel: EmployeeModel, private toastr: ToastrService, public router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.employeeService.CreateEmployee(form.value).subscribe(data => {
      this.toastr.success("Employee Created Successfully.", 'Employee');
      form.reset();
      this.router.navigate(['/dashboard/employee']);
    }, (error) => {
      this.toastr.error("Employee is not created. Please enter all required fields.", 'Employee');
    })
  }
}
