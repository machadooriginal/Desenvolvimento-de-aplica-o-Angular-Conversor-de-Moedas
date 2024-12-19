import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaxaResposta } from '../models/moedas';

@Injectable({
  providedIn: 'root',
})
export class ConversaoService {
  private apiUrl =
    'https://v6.exchangerate-api.com/v6/d54fe376c5e1c2f2d6afd8fb/latest/';

  constructor(private http: HttpClient) {}

  obterTaxas(moedaOrigem: string): Observable<Partial<TaxaResposta>> {
    return this.http.get(`${this.apiUrl}${moedaOrigem}`);
  }
}