import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { ProductModel } from '../shared/product-model';
import { ProductService } from '../shared/product.service';
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers: [ProductService, ProductModel],
})
export class ProductCreateComponent implements OnInit {
  model = ProductModel;
  constructor(private productService: ProductService,
    private productModel: ProductModel, private toastr: ToastrService, public router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.productService.CreateProduct(form.value).subscribe(data => {
      this.toastr.success("Product Created Successfully.", 'Contact');
      form.reset();
      this.router.navigate(['/dashboard/user']);
    }, (error) => {
      this.toastr.error("Product is not created. Please enter all required fields.", 'Contact');
    })
  }

}
