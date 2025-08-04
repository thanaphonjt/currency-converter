interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface CurrencySelectProps {
    value: string;
    onChange: (value: string) => void;
    currencies: Currency[];
}

export default function CurrencySelect({ value, onChange, currencies }: CurrencySelectProps) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="block w-full px-4 py-3 border border-amber-300 rounded-lg leading-5 bg-amber-50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all duration-200 hover:border-amber-400"
        >
            {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name} ({currency.symbol})
                </option>
            ))}
        </select>
    );
} 