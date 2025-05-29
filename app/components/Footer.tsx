import Link from "next/link";
import { FaFacebookF, FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-30 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Let’s <span className="text-blue-500 italic">Connect</span> there
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Left - Brand & Social */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center mb-3">
              <span className="bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-2">O</span>
              <span className="text-xl font-semibold">Justin Pan</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Please feel free to contact me for any inquiries or questions.</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" className="bg-blue-400 rounded-full w-9 h-9 flex items-center justify-center text-white"><FaFacebookF /></a>
              <a href="https://www.behance.net/altondesignplace" target="_blank" className="bg-blue-400 rounded-full w-9 h-9 flex items-center justify-center text-white"><FaBehance /></a>
              <a href="https://www.instagram.com/chenshshei/" target="_blank" className="bg-blue-400 rounded-full w-9 h-9 flex items-center justify-center text-white"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/cheng-xupan/" target="_blank" className="bg-blue-400 rounded-full w-9 h-9 flex items-center justify-center text-white"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Center - Navigation & Contact */}
          <div className="flex-1 flex flex-col md:flex-row gap-8 min-w-[300px]">
            <div>
              <div className="font-semibold text-blue-600 mb-2">Navigation</div>
              <nav className="flex flex-col gap-1 text-gray-700 text-sm">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
            <div>
              <div className="font-semibold text-blue-600 mb-2">Contact</div>
              <div className="text-gray-700 text-sm mb-1">+886 970711698</div>
              <div className="text-gray-700 text-sm mb-1">billy890917@gmail.com</div>
            </div>
          </div>

          {/* Right - Newsletter */}
          <div className="flex-1 min-w-[220px]">
            <div className="font-semibold text-blue-600 mb-2">Get the latest information</div>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="rounded-l-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 text-sm w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-full flex items-center justify-center"
                aria-label="Subscribe"
              >
                <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h12M11 4l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </form>
            {/* <div className="flex justify-end mt-4">
              <Link href="/blogs" className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow transition">
                View All Blogs
                <span className="inline-block ml-2 bg-white text-blue-500 rounded-full w-7 h-7 flex items-center justify-center">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" stroke="#F59E0B" strokeWidth="2"/><path d="M8 10h4M10 8l2 2-2 2" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
