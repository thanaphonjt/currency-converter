import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConverter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4 animate-fade-in">
            แปลงค่าเงินออนไลน์
          </h2>
          <p className="text-amber-800 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            ใช้เครื่องมือแปลงค่าเงินของเราเพื่อแปลงระหว่างสกุลเงินต่างๆ
            ได้อย่างรวดเร็วและแม่นยำ พร้อมอัตราแลกเปลี่ยนที่อัพเดทแบบเรียลไทม์
          </p>
        </div>

        <CurrencyConverter />

        <div className="mt-16 card card-hover animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-xl font-semibold text-amber-900 mb-6">
            💡 เคล็ดลับการใช้งาน
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4 animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 animate-bounce">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">ใส่จำนวนเงิน</h4>
                  <p className="text-sm text-amber-700">ใส่จำนวนเงินที่ต้องการแปลงในช่องแรก</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-slide-in-left" style={{ animationDelay: '1.0s' }}>
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 animate-bounce">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">เลือกสกุลเงิน</h4>
                  <p className="text-sm text-amber-700">เลือกสกุลเงินต้นและสกุลเงินปลายทาง</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 animate-slide-in-right" style={{ animationDelay: '1.1s' }}>
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 animate-bounce">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">ดูผลลัพธ์</h4>
                  <p className="text-sm text-amber-700">ผลลัพธ์จะแสดงทันทีพร้อมอัตราแลกเปลี่ยน</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 animate-slide-in-right" style={{ animationDelay: '1.2s' }}>
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 animate-bounce">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-amber-900 mb-1">สลับสกุลเงิน</h4>
                  <p className="text-sm text-amber-700">กดปุ่มสลับเพื่อเปลี่ยนทิศทางการแปลง</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
