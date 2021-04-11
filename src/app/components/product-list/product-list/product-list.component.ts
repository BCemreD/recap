import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from 'src/app/models/productDetail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productDetails: ProductDetail[] = [];
  dataLoaded: boolean = false;

  @Input() productFilterText: string = '';
  @Input() class: string = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['brand'] && params['color'])
        this.getProductDetailsByBrandNameAndColorName(
          params['brand'],
          params['color']
        );
      else if (params['brand']) this.getProductDetailsByBrand(params['brand']);
      else if (params['color']) this.getProductDetailsByColor(params['color']);
      else this.getProductDetails();
    });
  }

  getProductDetails() {
    this.productService.getProductDetails().subscribe((response) => {
      this.productDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getProductDetailsByBrand(brandName: string) {
    this.productService.getProductDetailsByBrand(brandName).subscribe((response) => {
      this.productDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getProductDetailsByColor(colorName: string) {
    this.productService.getProductDetailsByColor(colorName).subscribe((response) => {
      this.productDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getProductDetailsByBrandNameAndColorName(brandName: string, colorName: string) {
    this.productService
      .getProductDetailsByBrandNameAndColorName(brandName, colorName)
      .subscribe((response) => {
        this.productDetails = response.data;
        this.dataLoaded = true;
      });
  }
}