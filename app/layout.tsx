import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "Varige Bad",
  description: "Eksperter på bad, flislegging og totaloppussing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="bg-white text-neutral-900 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
