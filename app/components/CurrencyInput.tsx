interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface CurrencyInputProps {
    value: number;
    onChange: (value: number) => void;
    currency: Currency;
}

export default function CurrencyInput({ value, onChange, currency }: CurrencyInputProps) {
    // ฟังก์ชันจัดรูปแบบตัวเลขให้มีเครื่องหมายคอมม่า
    const formatNumber = (num: number): string => {
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
    };

    // ฟังก์ชันแปลงข้อความกลับเป็นตัวเลข
    const parseFormattedNumber = (text: string): number => {
        // ลบเครื่องหมายคอมม่าและแปลงเป็นตัวเลข
        const cleanText = text.replace(/,/g, '');
        const num = parseFloat(cleanText);
        return isNaN(num) ? 0 : num;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFormattedNumber(e.target.value);
        onChange(newValue);
    };

    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-amber-600 text-sm font-medium">{currency.symbol}</span>
            </div>
            <input
                type="text"
                value={formatNumber(value)}
                onChange={handleChange}
                className="block w-full pl-12 pr-4 py-3 border border-amber-300 rounded-lg leading-5 bg-amber-50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all duration-200 hover:border-amber-400"
                placeholder="0"
                inputMode="decimal"
            />
        </div>
    );
} 