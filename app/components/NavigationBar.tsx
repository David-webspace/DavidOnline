"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
    const pathname = usePathname();
    return(
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm z-10">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">JP</div>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/" className={pathname === "/" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}>HOME</Link>
          <Link href="/about" className={pathname === "/about" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}>ABOUT ME</Link>
          <Link href="/projects" className={pathname === "/projects" ? "text-blue-600 font-bold" : "text-black hover:text-blue-600"}>PROJECTS</Link>
        </div>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">Contact me</Link>
      </nav>
    )
}