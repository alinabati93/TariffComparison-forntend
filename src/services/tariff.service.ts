import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TariffFilters } from 'src/models/tarrif-filters';
import { environment } from "src/environments/environment";
import { catchError, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  apiName = "Tariff"

  constructor(private http: HttpClient) { }


  getTariffs(filters: TariffFilters) {
    return this.http.post(environment.apiAddress + this.apiName + "/TariffList", filters, this.httpOptions).pipe(
      delay(environment.production ? 0 : 750)
    );
  }
}
