"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavigationBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

    return(
      <nav className="w-full flex items-center justify-center px-8 py-6 bg-white md:shadow-sm z-10">
        {/* Logo */}
        <div className="flex items-center gap-2 absolute left-10 top-4">
          <Link href="/" className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl z-100">JP</Link>
        </div>
        
        {/* Navigation Links: Web */}
        <div className="hidden md:flex items-center gap-8 z-100">
          <Link href="/" className={pathname === "/" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}>首頁</Link>
          <Link href="/about" className={pathname === "/about" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}>關於我</Link>
          <Link href="/projects" className={pathname === "/projects" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}>專案經驗</Link>
          <Link href="/service" className={pathname === "/service" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}>提供服務</Link>
          <Link href="/course" className={pathname === "/course" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}>課程購買</Link>
          <Link href="/contact" className={pathname === "/contact" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}>聯絡我</Link>
        </div>
     
        {/* Navigation Links: Mobile */}
        <button
          className="md:hidden fixed right-4 top-4 z-100 flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Overlay for UX, closes menu on click */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-70 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
        {/* Mobile menu: always rendered for animation */}
        <div
          className={`
            md:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-white flex flex-col items-center p-8 z-80
            transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col items-center gap-4 w-full mt-12">
            <Link href="/" className={`py-2 px-4 w-full text-center ${pathname === "/" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}`} onClick={() => setOpen(false)}>首頁</Link>
            <Link href="/about" className={`py-2 px-4 w-full text-center ${pathname === "/about" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}`} onClick={() => setOpen(false)}>關於我</Link>
            <Link href="/projects" className={`py-2 px-4 w-full text-center ${pathname === "/projects" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}`} onClick={() => setOpen(false)}>專案經驗</Link>
            <Link href="/contact" className={`py-2 px-4 w-full text-center ${pathname === "/contact" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}`} onClick={() => setOpen(false)}>聯絡我</Link>
          </div>
        </div>
      </nav>
    )
}