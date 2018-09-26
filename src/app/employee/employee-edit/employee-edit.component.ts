import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { EmployeeModel } from '../shared/employee-model';
import { HttpErrorResponse } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
  providers: [EmployeeService, EmployeeModel],
})
export class EmployeeEditComponent implements OnInit {
  private employeeId: string;

  constructor(private employeeService: EmployeeService,private employeeModel: EmployeeModel, private toastr: ToastrService, public router: Router,
    private route: ActivatedRoute) { 
    }

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(this.employeeId).subscribe(data => {
      this.employeeService.model = data;
    }, (error: HttpErrorResponse) => {
      this.toastr.error("Error to load Employee.", 'Employee');
    });
  }

  onSubmit(form: NgForm) {
    this.employeeService.UpdateEmployee(form.value).subscribe(data => {
      this.toastr.success("Employee Updated Successfully.", 'Employee');
      form.reset();
      this.router.navigate(['/dashboard/employee']);
    }, (error) => {
      this.toastr.error("Employee is not updated. Please enter all required fields.", 'Employee');
    })
  }
}
