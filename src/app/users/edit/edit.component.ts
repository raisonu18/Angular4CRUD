import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../shared/contact.service';
import { ContactModel } from '../shared/contact-model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ContactService, ContactModel],
})
export class EditComponent implements OnInit {
  private contcatId: string;
  constructor(private contactService: ContactService, private toastr: ToastrService, public router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.contcatId = this.route.snapshot.paramMap.get('id');
    this.contactService.getContac(this.contcatId).subscribe(data => {
      this.contactService.model = data;
    }, (error: HttpErrorResponse) => {
      this.toastr.error("Error to load contact.", 'Contact');
    });
  }
  onSubmit(form: NgForm) {
    this.contactService.UpdateContact(form.value).subscribe(data => {
      this.toastr.success("Contact Updated Successfully.", 'Contact');
      form.reset();
      this.router.navigate(['/dashboard/user']);
    }, (error) => {
      this.toastr.error("Contact is not updated. Please enter all required fields.", 'Contact');
    })
  }
}
