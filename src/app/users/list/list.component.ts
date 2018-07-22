import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../create/shared/contact-model';
import { ContactService } from '../create/shared/contact.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ContactService, ContactModel],
})
export class ListComponent implements OnInit {
  constructor(private contactService: ContactService, private toastr: ToastrService, public router: Router) { }

  ngOnInit() {
    this.contactService.getContactList().subscribe(data => {
      this.contactService.contactList = data;
    }, (error: HttpErrorResponse) => {
      this.toastr.error("Error to load contact list.", 'Contact');
    });
  }

}
