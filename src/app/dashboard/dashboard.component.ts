import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { DashboardService } from './shared/dashboard.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private dashboardService: DashboardService) {

  }

  ngOnInit() {
    this.dashboardService.getDetail().subscribe(data => {
      console.log(data);
    },(error: HttpErrorResponse) => {
    });
  }
  logout() {
    localStorage.removeItem("userToken");
    this.router.navigate(["/login"]);
  }
}
