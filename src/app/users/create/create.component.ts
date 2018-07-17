import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { ContactModel } from './shared/contact-model';
import { ContactService } from './shared/contact.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ContactService, ContactModel],
})
export class CreateComponent implements OnInit {
  constructor(private contactService: ContactService,
    private contactModel: ContactModel, private toastr: ToastrService, public router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.contactService.CreateContact(form.value).subscribe(data => {
      this.toastr.success("Contact Created Successfully.", 'Contact');
      form.reset();
    }, (error: HttpErrorResponse) => {
      this.toastr.error(error.message, 'Contact');
    })
  }

}
