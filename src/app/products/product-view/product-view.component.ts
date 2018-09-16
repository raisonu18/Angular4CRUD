import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../shared/product-model';
import { ProductService } from '../shared/product.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductService, ProductModel],
})
export class ProductViewComponent implements OnInit {

  constructor(private productService: ProductService, private toastr: ToastrService, public router: Router) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(data => {
      this.productService.productList = data;
    }, (error) => {
      this.toastr.error("Error to load product list.", 'Product');
    });
  }

}
