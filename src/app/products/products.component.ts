import { Component, OnInit } from '@angular/core';
import { ProductModel } from './shared/product-model';
import { ProductService } from './shared/product.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService, ProductModel],

})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
