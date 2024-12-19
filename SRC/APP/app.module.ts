import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoversaoMoedaComponent } from './conversao-moeda/conversao-moeda.component';

import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Menubar } from 'primeng/menubar';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { Image } from 'primeng/image';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { HomeComponent } from './components/home/home.component';
import { PaginatorModule } from 'primeng/paginator';
import { SliderModule } from 'primeng/slider';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [AppComponent, CoversaoMoedaComponent, NavBarComponent, CurrencyListComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
    Menubar,
    MenubarModule,
    Image,
    InputTextModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    PaginatorModule,
    SliderModule,
    DividerModule,
  ],
  providers: [
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}