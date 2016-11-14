import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'currency-select',
  template: `
    <select [ngModel]="selected" (ngModelChange)="onSelect($event)">
      <option *ngFor="let currency of supportedCurrencies" [value]="currency">{{currency}}</option>
    </select>
    <strong>{{selected}}</strong>
  `
})
export class CurrencySelect {
  @Input() selected: string;
  @Output() selectedChange = new EventEmitter<string>();


  private supportedCurrencies: string[];

  constructor(private exchangeService:ExchangeService){
    this.supportedCurrencies = exchangeService.supportedCurrencies;
  }

  onSelect(selected){
    this.selected = selected;
    this.selectedChange.emit(selected);
  }
}

