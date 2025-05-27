"use client";

import Link from "next/link";
import ScrollToTop from "../../components/ScrollToTop";
import Script from "next/script";

export default function ContactPage() {
  return (
    <>
      <Script
        id="mcjs"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/683f45251417b61f67e601f68/1ac3b0c4f04e80bd7eee5e765.js");`
        }}
      />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <Link href="/">Back to Home</Link>
      </main>
      <ScrollToTop />
    </>
  );
}