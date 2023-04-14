import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TariffFilters } from 'src/models/tarrif-filters';
import { environment } from "src/environments/environment";
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }


  getTariffs(filters: TariffFilters) {
    return this.http.post(environment.apiAddress, filters, this.httpOptions);
  }
}
