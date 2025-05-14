"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="mb-6">Feel free to reach out to me via the form below or at <a href="mailto:[your.email@example.com]" className="text-blue-600 underline">[your.email@example.com]</a>.</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border px-3 py-2 rounded" rows={5} required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
