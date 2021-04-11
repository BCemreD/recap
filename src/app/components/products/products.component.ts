import { Component, OnInit } from '@angular/core';
import { ProductDetail } from 'src/app/models/productDetail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productDetails: ProductDetail[] = [];
  dataLoaded: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.productService.getProductDetails().subscribe((response) => {
      this.productDetails = response.data;
      this.dataLoaded = true;
    });
  }
}