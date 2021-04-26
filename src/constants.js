const constants = {
    baseURL: 'https://api.coincap.io/v2',
    baseCurrencyId: 'dollar',
    unitCurrencyRate: {
        id: 'dollar',
        rateUsd: 1.0
    },
    currencies: [
        {
            id: 'dollar',
            cSymbol: '$',
            symbol: 'USD',
            displayName: 'US Dollars'
        },
        {
            id: 'euro',
            cSymbol: '€',
            symbol: 'EUR',
            displayName: 'Euro'
        },
        {
            id: 'turkish-lira',
            cSymbol: '₺',
            symbol: 'TRY',
            displayName: 'Turkish Lira'
        },
        {
            id: 'british-pound-sterling',
            cSymbol: '£',
            symbol: 'GBP',
            displayName: 'Pound Sterling'
        }
    ]
}

export default constants
