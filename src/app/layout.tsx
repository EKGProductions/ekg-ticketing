// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main> {/* flex-grow forces footer to bottom */}
        <Footer />
        <FloatingSocials />
      </body>
    </html>
  );
}