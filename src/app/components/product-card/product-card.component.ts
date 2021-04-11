import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()productDetail:ProductDetail;
  carImage:CarImage;
  carImageUrl:string ='';

  constructor(private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.getCarImage();
  }

  getCarImage(){
    this.carImageService.getImagesById(this.productDetail.id).subscribe((response)=>{
      this.carImage=response.data[0];
      this.carImageUrl=this.carImageService.getCarImageUrl();
    });
  }
}
