import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { ProductModel } from '../shared/product-model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  providers: [ProductService, ProductModel],
})
export class ProductEditComponent implements OnInit {
  private productId: string;
  constructor(private productService: ProductService, private toastr: ToastrService, public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productId).subscribe(data => {
      this.productService.model = data;
    }, (error: HttpErrorResponse) => {
      this.toastr.error("Error to load Product.", 'Product');
    });
  }

  onSubmit(form: NgForm) {
    this.productService.UpdateProduct(form.value).subscribe(data => {
      this.toastr.success("Product Updated Successfully.", 'Product');
      form.reset();
      this.router.navigate(['/dashboard/product']);
    }, (error) => {
      this.toastr.error("Product is not updated. Please enter all required fields.", 'Product');
    })
  }

}
