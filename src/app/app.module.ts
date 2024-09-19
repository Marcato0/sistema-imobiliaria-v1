import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageModule } from './layout/home/home.module';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.modules';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule
  ],
  providers: [CurrencyPipe, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
