import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CartProvider } from "@/components/CartProvider";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Luxury Interior Designers in Bangalore | The Grandiose",
    template: "%s | The Grandiose",
  },
  description:
    "Transform your home with the top interior designers in Bangalore. We specialize in modern, elegant, and functional designs for every living space.",

  keywords: [
    "interior designers bangalore",
    "best interior designers bangalore",
    "luxury interior designers bangalore",
    "home interiors bangalore",
    "residential interiors bangalore",
    "villa interiors bangalore",
    "commercial interiors bangalore",
    "turnkey interior solutions",
    "premium home interior",
    "modern home interiors",
    "luxury homes bangalore",
    "modular kitchen bangalore",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
