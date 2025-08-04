interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface ExchangeRateProps {
    fromCurrency: Currency;
    toCurrency: Currency;
    rate: number;
    isLoading: boolean;
}

export default function ExchangeRate({ fromCurrency, toCurrency, rate, isLoading }: ExchangeRateProps) {
    // ฟังก์ชันจัดรูปแบบตัวเลขให้มีเครื่องหมายคอมม่า
    const formatNumber = (num: number): string => {
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 4,
            maximumFractionDigits: 4
        });
    };

    return (
        <div className="bg-amber-100 rounded-xl p-6 border border-amber-300 animate-pulse-glow">
            <h3 className="text-sm font-medium text-amber-800 mb-3">อัตราแลกเปลี่ยน</h3>
            {isLoading ? (
                <div className="animate-pulse text-amber-600">กำลังโหลด...</div>
            ) : (
                <div className="text-amber-700">
                    <div className="text-lg font-semibold mb-2">
                        1 {fromCurrency.code} = {formatNumber(rate)} {toCurrency.code}
                    </div>
                    <div className="text-sm opacity-75">
                        1 {toCurrency.code} = {formatNumber(1 / rate)} {fromCurrency.code}
                    </div>
                </div>
            )}
        </div>
    );
} 