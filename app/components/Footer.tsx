export default function Footer() {
    return (
        <footer className="bg-amber-900 text-amber-100 py-12 mt-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <h3 className="text-lg font-semibold mb-4 text-amber-50">เกี่ยวกับเรา</h3>
                        <p className="text-amber-200 text-sm leading-relaxed">
                            เว็บไซต์แปลงค่าเงินที่ใช้งานง่าย เร็ว และแม่นยำ
                            พัฒนาด้วยเทคโนโลยีล่าสุด
                        </p>
                    </div>
                    <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-lg font-semibold mb-4 text-amber-50">สกุลเงินที่รองรับ</h3>
                        <div className="text-amber-200 text-sm space-y-1">
                            <div>USD, EUR, GBP, JPY</div>
                            <div>THB, CNY, KRW, SGD</div>
                            <div>AUD, CAD และอื่นๆ</div>
                        </div>
                    </div>
                    <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <h3 className="text-lg font-semibold mb-4 text-amber-50">ข้อมูลสำคัญ</h3>
                        <div className="text-amber-200 text-sm space-y-1">
                            <div>⚠️ อัตราแลกเปลี่ยนอาจเปลี่ยนแปลงได้</div>
                            <div>📅 อัพเดทล่าสุด: {new Date().toLocaleDateString('th-TH')}</div>
                            <div>🔒 ข้อมูลของคุณปลอดภัย 100%</div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-amber-700 mt-8 pt-8">
                    <p className="text-amber-300 text-sm">
                        © 2024 แปลงค่าเงิน. สร้างด้วย Next.js และ Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
} 