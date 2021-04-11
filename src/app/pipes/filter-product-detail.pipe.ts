import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetail } from '../models/productDetail';

@Pipe({
  name: 'filterProductDetail',
})
export class FilterProductDetailPipe implements PipeTransform {
  transform(value: ProductDetail[], filterText: string): ProductDetail[] {
    return value.filter((p: ProductDetail) =>
      `${p.modelYear} ${p.brandName} ${p.productName}`
        .toLocaleLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  }
}
