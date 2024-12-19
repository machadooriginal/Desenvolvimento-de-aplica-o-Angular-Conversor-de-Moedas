import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/d54fe376c5e1c2f2d6afd8fb/latest';


  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
