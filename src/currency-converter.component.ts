import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [value]="baseAmount" (keyup)="change($event)" >
    USD =
    <strong>{{targetAmount}}</strong>
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
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
  `]
})
export class CurrencyConverter {
  currencyExchange:number = 0.7;
  baseAmount:number = 1;
  targetAmount:number = this.baseAmount * this.currencyExchange;

  change(event){
    this.baseAmount = +event.target.value;
    this.targetAmount = this.baseAmount * this.currencyExchange;
  }
}
