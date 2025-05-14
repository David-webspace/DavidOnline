"use client";

import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <ul className="space-y-6">
        <li>
          <h2 className="text-xl font-semibold">[Project Name]</h2>
          <p>[Short description of the project, technologies used, and your role.]</p>
          <a href="[Project Link]" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">View Project</a>
        </li>
        {/* Add more projects as needed */}
      </ul>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
