// API สำหรับดึงข้อมูลอัตราแลกเปลี่ยน
// ใช้ exchangerate-api.com (ฟรี API)

const API_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

export interface ExchangeRateResponse {
    rates: { [key: string]: number };
    base: string;
    date: string;
}

export class ExchangeRateService {
    private static cache: { [key: string]: { data: ExchangeRateResponse; timestamp: number } } = {};
    private static CACHE_DURATION = 5 * 60 * 1000; // 5 นาที

    // ดึงข้อมูลอัตราแลกเปลี่ยนจาก API
    static async getExchangeRates(baseCurrency: string = 'USD'): Promise<ExchangeRateResponse> {
        const cacheKey = `rates_${baseCurrency}`;
        const now = Date.now();

        // ตรวจสอบ cache
        if (this.cache[cacheKey] && (now - this.cache[cacheKey].timestamp) < this.CACHE_DURATION) {
            return this.cache[cacheKey].data;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/${baseCurrency}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: ExchangeRateResponse = await response.json();

            // บันทึก cache
            this.cache[cacheKey] = {
                data,
                timestamp: now
            };

            return data;
        } catch (error) {
            console.error('Error fetching exchange rates:', error);

            // ถ้า API ไม่ทำงาน ให้ใช้ข้อมูลจำลอง
            return this.getFallbackRates(baseCurrency);
        }
    }

    // คำนวณอัตราแลกเปลี่ยนระหว่างสองสกุลเงิน
    static async getExchangeRate(fromCurrency: string, toCurrency: string): Promise<number> {
        if (fromCurrency === toCurrency) {
            return 1;
        }

        try {
            const rates = await this.getExchangeRates(fromCurrency);
            return rates.rates[toCurrency] || 1;
        } catch (error) {
            console.error('Error calculating exchange rate:', error);
            return this.getFallbackRate(fromCurrency, toCurrency);
        }
    }

    // ข้อมูลจำลองสำหรับกรณีที่ API ไม่ทำงาน
    private static getFallbackRates(baseCurrency: string): ExchangeRateResponse {
        const fallbackRates: { [key: string]: ExchangeRateResponse } = {
            USD: {
                base: 'USD',
                date: new Date().toISOString().split('T')[0],
                rates: {
                    EUR: 0.93,
                    GBP: 0.79,
                    JPY: 150.25,
                    THB: 35.5,
                    CNY: 7.25,
                    KRW: 1350.0,
                    SGD: 1.35,
                    AUD: 1.52,
                    CAD: 1.35,
                    USD: 1.0
                }
            },
            EUR: {
                base: 'EUR',
                date: new Date().toISOString().split('T')[0],
                rates: {
                    USD: 1.08,
                    GBP: 0.85,
                    JPY: 162.0,
                    THB: 38.2,
                    CNY: 7.8,
                    KRW: 1450.0,
                    SGD: 1.45,
                    AUD: 1.63,
                    CAD: 1.45,
                    EUR: 1.0
                }
            },
            THB: {
                base: 'THB',
                date: new Date().toISOString().split('T')[0],
                rates: {
                    USD: 0.028,
                    EUR: 0.026,
                    GBP: 0.022,
                    JPY: 4.17,
                    CNY: 0.204,
                    KRW: 38.0,
                    SGD: 0.038,
                    AUD: 0.043,
                    CAD: 0.038,
                    THB: 1.0
                }
            }
        };

        return fallbackRates[baseCurrency] || fallbackRates.USD;
    }

    // อัตราแลกเปลี่ยนจำลอง
    private static getFallbackRate(fromCurrency: string, toCurrency: string): number {
        const fallbackRates: { [key: string]: number } = {
            'USD-THB': 35.5,
            'EUR-THB': 38.2,
            'GBP-THB': 44.8,
            'JPY-THB': 0.24,
            'THB-USD': 0.028,
            'THB-EUR': 0.026,
            'THB-GBP': 0.022,
            'THB-JPY': 4.17,
            'USD-EUR': 0.93,
            'USD-GBP': 0.79,
            'EUR-USD': 1.08,
            'EUR-GBP': 0.85,
            'GBP-USD': 1.26,
            'GBP-EUR': 1.18,
        };

        const key = `${fromCurrency}-${toCurrency}`;
        const reverseKey = `${toCurrency}-${fromCurrency}`;

        if (fallbackRates[key]) {
            return fallbackRates[key];
        } else if (fallbackRates[reverseKey]) {
            return 1 / fallbackRates[reverseKey];
        }

        return 1;
    }

    // ดึงข้อมูลสกุลเงินที่รองรับ
    static getSupportedCurrencies(): string[] {
        return ['USD', 'EUR', 'GBP', 'JPY', 'THB', 'CNY', 'KRW', 'SGD', 'AUD', 'CAD'];
    }
} 