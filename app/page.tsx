import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <main className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/next.svg"
            alt="Profile logo"
            width={120}
            height={120}
            className="rounded-full mb-4"
          />
          <h1 className="text-4xl font-bold mb-2 text-center">[Justin Pan]</h1>
          <p className="text-lg text-gray-700 text-center mb-2">[Website Developer, Designer, etc.]</p>
          <p className="text-center text-gray-600 max-w-xl">[A brief introduction about yourself, your passions, and what you do.]</p>
        </div>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>[Job Title] at [Company] ([Year-Year])</li>
            <li>[Job Title] at [Company] ([Year-Year])</li>
            {/* Add more experiences as needed */}
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Events</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>[Event Name], [Location], [Year]</li>
            <li>[Event Name], [Location], [Year]</li>
            {/* Add more events as needed */}
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>[Degree], [Institution], [Year]</li>
            {/* Add more education details as needed */}
          </ul>
        </section>
        <nav className="flex justify-center gap-6 mt-8">
          <Link href="/about" className="text-blue-600 hover:underline text-lg">About Me</Link>
          <Link href="/projects" className="text-blue-600 hover:underline text-lg">Projects</Link>
          <Link href="/contact" className="text-blue-600 hover:underline text-lg">Contact</Link>
        </nav>
      </main>
    </div>
  );
}

