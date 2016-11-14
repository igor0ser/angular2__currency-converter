import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [(ngModel)]="baseAmount">
    <currency-select [(selected)]="baseCurrency"></currency-select>
    <strong>{{targetAmount | fixed: 3}}</strong>
    <currency-select [(selected)]="targetCurrency"></currency-select>
  `,
  styles: [`
    input[type=number]{
      width: 10ex;
      text-align: right;
      padding-right: 1ex;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
  `]
})
export class CurrencyConverter {
  baseAmount:number = 1;
  baseCurrency:string = 'EUR';
  targetCurrency:string = 'USD';

  constructor(private exchangeService:ExchangeService){}

  get targetAmount(){
    return this.baseAmount * this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);
  }
}
