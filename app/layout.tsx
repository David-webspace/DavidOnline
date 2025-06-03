import type { Metadata } from "next";
// import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import LanguageSelector from "./components/LanguageSelector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Pan Portfolio",
  keywords: [],
  authors: [
    {
      name: "Justin Pan",
      // url: "https://justinpan.com",
    },
  ],
  icons: [
    {
      rel: "icon",
      type: "image/jpeg",
      sizes: "32x32",
      url: "/profile.jpeg",
    },
    // {
    //   rel: "icon",
    //   type: "image/jpeg",
    //   sizes: "16x16",
    //   url: "/profile.jpeg",
    // },
  ],

  description: "2025年不能錯過的最強頂尖前端開發者，專注於前端網站架設，也能夠進行UIUX研究流程，並熟悉Figma操作。",
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 100 }}>
          {/* <LanguageSelector /> */}
        </div>
        {children}
      </body>
    </html>
  );
}