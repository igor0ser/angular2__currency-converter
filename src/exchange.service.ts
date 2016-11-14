export class ExchangeService {
	private rates = {
		'EUR/GBP': 0.8007,
		'EUR/USD': 1.1397,
		'GBP/EUR': 1.2478,
		'GBP/USD': 1.4225,
		'USD/EUR': 0.8778,
		'USD/GBP': 0.7029
	}

	supportedCurrencies = ['USD', 'GBP', 'EUR'];

	getExchangeRate(baseCurrency: string, targetCurrency: string) :number{
		if (baseCurrency === targetCurrency) return 1;
		return this.rates[`${baseCurrency}/${targetCurrency}`];
	}
}