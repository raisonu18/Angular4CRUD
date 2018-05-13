import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './shared/registration.service'
import { RegistrationModel } from './shared/registration-model'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService, RegistrationModel],
})
export class RegistrationComponent implements OnInit {
  constructor(private registrationService: RegistrationService,
     private registrationModel: RegistrationModel,
     private toastr: ToastrService,
     public router:Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    this.registrationService.postRegistration(form.value).subscribe(data=>{
      this.toastr.success('Registration Successfully Completed.', 'Registration');
      form.reset();
      this.router.navigate(['\login']);
    },(error:any)=>{
      this.toastr.error(error._body, 'Registration');
    })
  }
}
