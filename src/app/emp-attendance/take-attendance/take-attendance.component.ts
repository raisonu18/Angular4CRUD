import { Component, OnInit } from '@angular/core';
import { AttendanceModel } from '../shared/attendance-model';
import { AttendanceService } from '../shared/attendance.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css'],
  providers: [AttendanceService, AttendanceModel],
})
export class TakeAttendanceComponent implements OnInit {
  constructor(private attendanceService: AttendanceService, private toastr: ToastrService, public router: Router) {
  }
  objDate = Date.now(); 

  ngOnInit() {
    this.attendanceService.getAttendanceList().subscribe(data => {
      this.attendanceService.employeeAttendanceList = data;
    }, (error) => {
      this.toastr.error("Error to load customer list.", 'customer');
    });
  }

  onSubmit(form) {
    this.attendanceService.TakeAttendance(form).subscribe(data => {
      this.toastr.success("Attendance Updated Successfully.", 'Attendance');
      //this.router.navigate(['/dashboard/employee']);
    }, (error) => {
      this.toastr.error("Please try again.", 'Attendance');
    })
  }
}
