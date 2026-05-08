import "./globals.css";
import { productSans } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={productSans.className}>
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}
  <Footer />
      </body>
    </html>
  );
}