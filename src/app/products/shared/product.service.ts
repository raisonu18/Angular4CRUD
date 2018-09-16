import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  model = ProductModel;
  productList: ProductModel[];
  constructor(private http: Http) { }
  CreateProduct(productModel: ProductModel) {
    var body = JSON.stringify(productModel);
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:51498/api/Product/Create', body, requestOptions);
  }
  getProductList() {
    var headerOptions = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get('http://localhost:51498/api/Product/list', { headers: headerOptions })
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  getProduct(id) {
    var headerOptions = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get('http://localhost:51498/api/Product/edit/' + id, { headers: headerOptions })
      .map((res: Response) => res.json());
  }
  UpdateProduct(productModel: ProductModel) {
    var body = JSON.stringify(productModel);
    var headerOptions = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost:51498/api/Product/update', body, requestOptions);
  }
  handleError(error: Response) {
    return Observable.throw(error);
  };
}
