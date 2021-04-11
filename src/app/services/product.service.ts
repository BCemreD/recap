import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ProductDetail } from '../models/productDetail';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiControllerUrl = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(
      `${this.apiControllerUrl}/getall`
    );
  }

  getById(id: number): Observable<SingleResponseModel<Product>> {
    return this.httpClient.get<SingleResponseModel<Product>>(
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getProductDetails(): Observable<ListResponseModel<ProductDetail>> {
    return this.httpClient.get<ListResponseModel<ProductDetail>>(
      `${this.apiControllerUrl}/getproductdetails`
    );
  }

  getProductDetailsByBrand(
    brandName: string
  ): Observable<ListResponseModepl<ProductDetail>> {
    return this.httpClient.get<ListResponseModel<ProductDetail>>(
      `${this.apiControllerUrl}/getproductdetailsbybrandname?name=${brandName}`
    );
  }

  getProductDetailsByColor(
    colorName: string
  ): Observable<ListResponseModel<ProductDetail>> {
    return this.httpClient.get<ListResponseModel<ProductDetail>>(
      `${this.apiControllerUrl}/getproductdetailsbycolorname?name=${colorName}`
    );
  }

  getProductDetailsByBrandNameAndColorName(
    brandName: string,
    colorName: string
  ): Observable<ListResponseModel<ProductDetail>> {
    return this.httpClient.get<ListResponseModel<ProductDetail>>(
      `${this.apiControllerUrl}/getproductdetailsbybrandnameandcolorname?brandName=${brandName}&colorName=${colorName}`
    );
  }

  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/add`,
      product
    );
  }

  update(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/update`,
      product
    );
  }

  delete(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/delete`,
      product
    );
  }
}