import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CurrencySelect } from './currency-select.component';
import { CurrencyConverter } from './currency-converter.component';
import { ExchangeService } from './exchange.service';
import { FixedPipe } from './fixed.pipe';
import { AppComponent } from './app.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, CurrencyConverter, CurrencySelect, FixedPipe],
	providers: [ExchangeService],
	bootstrap: [AppComponent]
})
export class AppModule { }
