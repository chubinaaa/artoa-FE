import type { Metadata } from "next";
import "@/styles/globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { firaGo } from "@/config/font";

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
