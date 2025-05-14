"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="mb-6">[Your brief bio goes here. You can describe your background, interests, and what drives you professionally.]</p>
      <h2 className="text-2xl font-semibold mb-2">Experience</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>[Job Title] at [Company] ([Year-Year])</li>
        <li>[Job Title] at [Company] ([Year-Year])</li>
        {/* Add more experiences as needed */}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Education</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>[Degree], [Institution], [Year]</li>
        {/* Add more education details as needed */}
      </ul>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
