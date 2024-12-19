import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  currencies: { code: string; rate: number; }[] = [];
  isLoading: boolean = true;
  totalRecords: number = 0;
  rows: number = 10;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe({
      next: (data) => {
        this.currencies = Object.entries(data.conversion_rates).map(([code, rate]) => ({
          code,
          rate
        }));
        this.totalRecords = this.currencies.length;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar as moedas', error);
        this.isLoading = false;
      }
    });
  }

  filterGlobal(event: Event) {
    const input = event.target as HTMLInputElement;
    if (this.dt) {
      this.dt.filterGlobal(input.value, 'contains');
    }
  }
}
