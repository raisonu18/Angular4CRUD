import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './shared/registration.service'
import { RegistrationModel } from './shared/registration-model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService, RegistrationModel],
})
export class RegistrationComponent implements OnInit {
  constructor(private registrationService: RegistrationService, private registrationModel: RegistrationModel) { }

  ngOnInit() {
  }

}
