import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
  constructor(private http: Http) { }

}
