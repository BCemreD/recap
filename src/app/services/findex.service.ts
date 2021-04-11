import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Findex } from '../models/findex';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class FindexService {
  apiUrl = `${environment.apiUrl}/findex`;

  constructor(private httpClient: HttpClient) {}

  getByCustomerId(
    customerId: number
  ): Observable<SingleResponseModel<Findex>> {
    return this.httpClient.get<SingleResponseModel<Findex>>(
      `${this.apiUrl}/getbycustomerid`,
      {
        params: {
          customerId: customerId.toString(),
        },
      }
    );
  }
}
