import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { LoginModel } from './shared/login-model';
import { LoginService } from './shared/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpErrorResponse } from '@angular/common/http'
@Component({
  selector: 'app-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, LoginModel],
})
export class UserComponent implements OnInit {
  model = LoginService;
  constructor(private loginService: LoginService,
    private loginModel: LoginModel,
    private toastr: ToastrService,
    public router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.loginService.postLogin(form.value).subscribe(data => {
      if (data.status != "" || data.status != undefined || data.status != null) {
        localStorage.setItem("userToken", data.status);
        var token = data.status;
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);
        const expirationDate = helper.getTokenExpirationDate(token);
        const isExpired = helper.isTokenExpired(token);
        this.router.navigate(['\dashboard']);
      } else {
        this.toastr.error("User Name or Password incorrect.", 'Login');
      }
      form.reset();
    }, (error: HttpErrorResponse) => {
      this.toastr.error('Invalid User Name or Password', 'Login');
    })
  }
}
