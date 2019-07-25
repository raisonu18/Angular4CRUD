import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { ContactModel } from '../shared/contact-model';
import { ContactService } from '../shared/contact.service';
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
    this.contactService.CreateContact(form.value).subscribe(data => {
      this.toastr.success("Contact Created Successfully.", 'Contact');
      form.reset();
      this.router.navigate(['/dashboard/user']);
    }, (error) => {
      this.toastr.error("Contact is not created. Please enter all required fields.", 'Contact');
    })
  }
}
