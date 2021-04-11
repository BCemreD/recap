import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiControllerUrl = `${environment.apiUrl}/carImages`;

  constructor(private httpClient: HttpClient) {}

  getImagesById(id: number): Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(
      `${this.apiControllerUrl}/getimagesbyid?id=${id}`
    );
  }

  getFileById(id: number): Observable<string> {
    return this.httpClient.get<string>(
      `${this.apiControllerUrl}/getfilebyid?id=${id}`
    );
  }

  getCarImageUrl(id: number): string {
    return `${this.apiControllerUrl}/getfilebyid?id=${id}`;
  }

  add(Id: number, file: File): Observable<ResponseModel> {
    const formData: FormData = new FormData();
    formData.append('Id', Id.toString());
    formData.append('Image', file);

    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/add`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
  }

  delete(carImage: CarImage): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/delete`,
      carImage
    );
  }
}