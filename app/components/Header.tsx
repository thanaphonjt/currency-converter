export default function Header() {
    return (
        <header className="gradient-cream border-b border-amber-200 py-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-3 text-amber-900 animate-fade-in">
                    💱 แปลงค่าเงิน
                </h1>
                <p className="text-lg text-amber-800 mb-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    แปลงค่าเงินระหว่างสกุลเงินต่างๆ ได้อย่างรวดเร็วและแม่นยำ
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-amber-700">
                    <div className="flex items-center gap-2 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span>อัพเดทอัตราแลกเปลี่ยนเงินแบบเรียลไทม์</span>
                    </div>
                    <div className="flex items-center gap-2 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>ใช้งานง่าย รองรับทุกอุปกรณ์</span>
                    </div>
                    <div className="flex items-center gap-2 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                        <span>ฟรี 100%</span>
                    </div>
                </div>
            </div>
        </header>
    );
} 