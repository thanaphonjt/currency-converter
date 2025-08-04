import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "แปลงค่าเงิน - เครื่องมือแปลงค่าเงินออนไลน์",
  description: "แปลงค่าเงินระหว่างสกุลเงินต่างๆ ได้อย่างรวดเร็วและแม่นยำ พร้อมอัตราแลกเปลี่ยนที่อัพเดทแบบเรียลไทม์",
  keywords: "แปลงค่าเงิน, อัตราแลกเปลี่ยน, เงิน, สกุลเงิน, USD, EUR, THB",
  authors: [{ name: "Currency Converter" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
