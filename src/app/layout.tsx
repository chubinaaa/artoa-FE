import type { Metadata } from "next";

import "@/styles/globals.css";

import { firaGo } from "@/config/font";
import { TailwindIndicator } from "@/components/tailwind-indicator";

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
      <body className={`${firaGo.className} scroll-hidden antialiased`}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
