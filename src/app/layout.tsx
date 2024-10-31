import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ArtOa",
  description: "Artoa x Doer collab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} scroll-hidden antialiased`}>
        <Header />
        <main className="flex w-full max-w-[1920px] items-center justify-between border-b-[0.5px] border-[#454749] bg-white px-[110px] py-[53px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
