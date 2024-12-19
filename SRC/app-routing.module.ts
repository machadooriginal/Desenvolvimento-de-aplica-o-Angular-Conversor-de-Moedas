import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CoversaoMoedaComponent } from './conversao-moeda/conversao-moeda.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'lista-moedas', component: CurrencyListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }