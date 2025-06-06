import { NextIntlClientProvider } from 'next-intl';
import LanguageSelector from "../../components/LanguageSelector";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function LocaleLayout({
  children
}: {
  children: ReactNode;
}) {
  const messages = require('../../../messages/en/common.json');
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 100 }}>
          <LanguageSelector />
        </div>
        <NextIntlClientProvider locale="en" messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
