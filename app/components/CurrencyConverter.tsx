'use client';

import { useState, useEffect } from 'react';
import CurrencyInput from './CurrencyInput';
import CurrencySelect from './CurrencySelect';
import ExchangeRate from './ExchangeRate';
import ApiStatus from './ApiStatus';
import { ExchangeRateService } from '../services/exchangeRateService';

interface Currency {
    code: string;
    name: string;
    symbol: string;
}

const currencies: Currency[] = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'THB', name: 'Thai Baht', symbol: '฿' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
];

export default function CurrencyConverter() {
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('THB');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [lastUpdated, setLastUpdated] = useState<string>('');
    const [isOnline, setIsOnline] = useState(true);

    // ฟังก์ชันจัดรูปแบบตัวเลขให้มีเครื่องหมายคอมม่า
    const formatNumber = (num: number): string => {
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
    };

    useEffect(() => {
        const convertCurrency = async () => {
            setIsLoading(true);

            try {
                // ดึงอัตราแลกเปลี่ยนจาก API
                const rate = await ExchangeRateService.getExchangeRate(fromCurrency, toCurrency);
                setExchangeRate(rate);
                setConvertedAmount(amount * rate);
                setIsOnline(true);

                // อัพเดทเวลาล่าสุด
                setLastUpdated(new Date().toLocaleString('th-TH'));
            } catch (error) {
                console.error('Error converting currency:', error);
                setIsOnline(false);
                // ใช้ค่าเดิมถ้าเกิดข้อผิดพลาด
            } finally {
                setIsLoading(false);
            }
        };

        convertCurrency();
    }, [fromCurrency, toCurrency, amount]);

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const fromCurrencyData = currencies.find(c => c.code === fromCurrency);
    const toCurrencyData = currencies.find(c => c.code === toCurrency);

    // ตรวจสอบว่าพบข้อมูลสกุลเงินหรือไม่
    if (!fromCurrencyData || !toCurrencyData) {
        return <div>เกิดข้อผิดพลาดในการโหลดข้อมูลสกุลเงิน</div>;
    }

    return (
        <div className="max-w-md mx-auto card card-hover animate-fade-in">
            <h2 className="text-2xl font-bold text-center mb-8 text-amber-900">
                แปลงค่าเงิน
            </h2>

            <div className="space-y-6">
                {/* จำนวนเงินต้น */}
                <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                    <label className="block text-sm font-medium text-amber-800 mb-3">
                        จำนวนเงิน
                    </label>
                    <CurrencyInput
                        value={amount}
                        onChange={setAmount}
                        currency={fromCurrencyData}
                    />
                </div>

                {/* เลือกสกุลเงินต้น */}
                <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                    <label className="block text-sm font-medium text-amber-800 mb-3">
                        จาก
                    </label>
                    <CurrencySelect
                        value={fromCurrency}
                        onChange={setFromCurrency}
                        currencies={currencies}
                    />
                </div>

                {/* ปุ่มสลับ */}
                <div className="flex justify-center">
                    <button
                        onClick={handleSwap}
                        className="p-3 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-all duration-200 hover-scale animate-float"
                        aria-label="สลับสกุลเงิน"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                    </button>
                </div>

                {/* เลือกสกุลเงินปลายทาง */}
                <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                    <label className="block text-sm font-medium text-amber-800 mb-3">
                        เป็น
                    </label>
                    <CurrencySelect
                        value={toCurrency}
                        onChange={setToCurrency}
                        currencies={currencies}
                    />
                </div>

                {/* ผลลัพธ์ */}
                <div className="gradient-amber rounded-xl p-6 border border-amber-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-amber-900 mb-3">
                            {isLoading ? (
                                <div className="animate-pulse text-amber-700">กำลังโหลด...</div>
                            ) : (
                                `${formatNumber(convertedAmount)} ${toCurrencyData.symbol}`
                            )}
                        </div>
                        <div className="text-sm text-amber-800">
                            {formatNumber(amount)} {fromCurrencyData.code} = {formatNumber(convertedAmount)} {toCurrencyData.code}
                        </div>
                    </div>
                </div>

                {/* สถานะ API */}
                <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <ApiStatus
                        isLoading={isLoading}
                        lastUpdated={lastUpdated}
                        isOnline={isOnline}
                    />
                </div>

                {/* อัตราแลกเปลี่ยน */}
                <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <ExchangeRate
                        fromCurrency={fromCurrencyData}
                        toCurrency={toCurrencyData}
                        rate={exchangeRate}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </div>
    );
} 