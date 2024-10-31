import type { Metadata } from "next";
import "@/styles/globals.css";
import { geistSans } from "@/config/font";

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
        {children}
      </body>
    </html>
  );
}
