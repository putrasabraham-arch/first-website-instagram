import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abraham Hermana Putra | Functional Consultant",
  description:
    "Portfolio of Abraham Hermana Putra, Functional Consultant specializing in Odoo, Accurate, ERP implementation, accounting workflows, and business process analysis.",
  keywords: [
    "Functional Consultant",
    "Odoo",
    "Accurate",
    "ERP",
    "Accounting",
    "Business Process Analysis",
    "Digital Transformation",
    "Indonesia",
  ],
  authors: [{ name: "Abraham Hermana Putra" }],
  openGraph: {
    title: "Abraham Hermana Putra | Functional Consultant",
    description:
      "Functional Consultant specializing in Odoo, Accurate, ERP implementation, accounting workflows, and business process analysis.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full bg-deep text-text font-sans">
        {children}
      </body>
    </html>
  );
}
