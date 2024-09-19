import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { HomePageRoutingModule } from './home-routing.module';
import { HelloWorldModule } from 'src/app/modules/hello-world/hello-word.module';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomePageRoutingModule, HelloWorldModule],
  providers: [CurrencyPipe, DecimalPipe],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
