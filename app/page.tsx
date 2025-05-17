import Image from "next/image";
import { FaFigma, FaReact, FaNodeJs, FaShopify } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import ScrollToTop from "./components/ScrollToTop";

const HeroSection =() => {
  return(
    <main className="max-w-6xl mx-auto flex-1 flex flex-col md:flex-row items-center justify-center px-8 pt-12 pb-24 gap-8 md:gap-50 relative">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl mt-8 md:mt-0">
        <span className="text-lg font-medium text-gray-700 mb-2 bg-blue-50 px-3 py-1 rounded">Hello !</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          I’m <span className="text-blue-600 underline">Justin Pan</span>,<br/>
          <span className="text-black">Web Designer & Developer Enthusiast</span>
        </h1>
        <p className="text-gray-500 mb-6 text-base md:text-lg">
          Innovative Website Developer with expertise in driving online growth through strategic design and development. Passionate about UI/UX and delivering impactful digital experiences.
        </p>
        <div className="flex gap-4 mb-8">
          <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">Hire Me</a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="border border-gray-400 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">Whatsapp</a>
        </div>
      </div>
      {/* Right: Photo */}
      <div className="flex-1 flex justify-center items-center relative">
        <div className="relative z-0">
          <Image
            src="/profile.jpeg"
            alt="Justin Pan photo"
            width={320}
            height={320}
            className="rounded-2xl shadow-xl object-cover border-4 border-blue-100"
            priority
          />
          <span className ="absolute top-4 left-0 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">WEB Designer</span>
          <span className="absolute bottom-4 right-0 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">UIUX Designer</span>
        </div>
      </div>
    </main>
  )
}

const ServiceSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-0">
    <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between mb-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-blue-600">Services</span> <span className="text-black">I Provide</span>
        </h2>
      </div>
      <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
        See More
        <span className="inline-block transform translate-x-0.5">→</span>
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col items-start hover:shadow-md transition">
        <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4">
          <Image src="/website.svg" alt="Website" width={64} height={64}/>
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">Website Development</h3>
        <p className="text-gray-500 text-sm mb-2">Create functional, engaging, and user-friendly websites.</p>
        <p className="text-gray-500 text-sm mb-2">Provide cross-border payment flow and local logistics integration in Taiwan.</p>
        <p className="text-gray-500 text-sm mb-2">Bind domains and set up an e-commerce backend.</p>
      </div>
      {/* Card 2 */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col items-start hover:shadow-md transition">
        <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4">
          <Image src="/wireframe.svg" alt="Wireframe" width={64} height={64}/>
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">UIUX Design</h3>
        <p className="text-gray-500 text-sm mb-2">Intuitive and user-friendly: Design should be simple and clear, enabling users to quickly get started and complete tasks efficiently.</p>
        <p className="text-gray-500 text-sm mb-2">Address user pain points, help achieve goals, and provide practical value.</p>
        <p className="text-gray-500 text-sm mb-2">Create positive interactions and emotional connections to enhance user satisfaction and loyalty.</p>
      </div>
      {/* Card 3 */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col items-start hover:shadow-md transition">
        <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4">
          <Image src="/communication.svg" alt="Communication" width={64} height={64}/>
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">Effective Communication</h3>
        <p className="text-gray-500 text-sm">Meeting Needs, Building Trust, and Fostering Internal and External Collaboration for Value Creation</p>
      </div>
    </div>
    </div>
  </section>
)}

const JourneySection = () => {
  return(
    <section className="w-full bg-white py-16 px-4 md:px-0 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My Academic and Professional <span className="text-blue-600">Journey</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Education Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-600 rounded-full p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3L2 9l10 6 10-6-10-6z"/><path d="M2 17l10 6 10-6"/></svg>
              </span>
              <span className="font-semibold text-lg">Education</span>
            </div>
            <ul className="space-y-4">
              <li>
                <div className="font-bold text-xl">National Yang Ming Chiao Tune University</div>
                <div className="text-xs text-gray-400">Hsinchu, Taiwan</div>
                <div className="text-xs text-gray-400 mb-1">Sep 2019 - Jun 2024</div>
              </li>
              <li>
                <div className="font-bold text-xl">Taipei Municipal Chenggong High School</div>
                <div className="text-xs text-gray-400">Peshawar, Pakistan</div>
                <div className="text-xs text-gray-400 mb-1">2016 - Jun 2019</div>
              </li>
            </ul>
          </div>
          {/* Work Experience Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-600 rounded-full p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
              </span>
              <span className="font-semibold text-lg">Work Experience</span>
            </div>
            <ul className="space-y-4">
              <li>
                <div className="font-bold text-xl">ECommerce Web Developer</div>
                <div className="font-bold text-sm">Wavenet Technology.</div>
                <div className="text-xs text-gray-400 mb-1">APR 2025 - Present</div>
              </li>
              <li>
                <div className="font-bold text-xl">UX Intern</div>
                <div className="font-bold text-sm">QNAP Systems, Inc.</div>
                <div className="text-xs text-gray-400 mb-1">JUN 2024 - NOV 2024</div>
              </li>
              <li>
                <div className="font-bold text-xl">UIUX Intern</div>
                <div className="text-sm">CRYPTO-ARSENAL TECHNOLOGY CO.</div>
                <div className="text-xs text-gray-400 mb-1">Feb 2024 - JUN 2024</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
            See more
            <span className="inline-block transform translate-x-0.5">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

const BlogSection = () => {
  return(
    <section className="w-full bg-white py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="block text-gray-500 italic mb-1">&ndash; Blogs</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-blue-600">Blog</span> <span className="text-black">My</span>
              </h2>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
              See More
              <span className="inline-block transform translate-x-0.5">→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Blog Card */}
            <div className="md:col-span-2 bg-gray-50 rounded-2xl p-0 shadow-sm overflow-hidden flex flex-col md:flex-row">
              <Image src="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Main Blog" className="w-full md:w-2/3 h-60 md:h-auto object-cover" width={600} height={400} />
              <div className="flex flex-col justify-between p-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">RUNNING</span>
                </div>
                <h3 className="text-xl font-bold mb-2">10 Essential Tips For Beginner Runners: Start Your Running Journey Right</h3>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>by Mike Chen</span>
                  <span>•</span>
                  <span>Oct 12, 2023</span>
                </div>
              </div>
            </div>
            {/* Blog List */}
            <div className="flex flex-col gap-4">
              {/* Blog Item 1 */}
              <div className="bg-gray-50 rounded-2xl flex gap-4 p-3 shadow-sm hover:shadow-md transition">
                <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80" alt="Blog 1" className="w-20 h-20 object-cover rounded-xl" width={100} height={100}/>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">RACE</span>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">The Science Behind Running: How It Benefits You</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>by Lee Li</span>
                    <span>•</span>
                    <span>Oct 12, 2023</span>
                  </div>
                </div>
              </div>
              {/* Blog Item 2 */}
              <div className="bg-gray-50 rounded-2xl flex gap-4 p-3 shadow-sm hover:shadow-md transition">
                <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80" alt="Blog 2" className="w-20 h-20 object-cover rounded-xl" width={100} height={100}/>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">RUNNING</span>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">From Couch To 5K: A Step-By-Step Guide To Becoming A Runner</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>by Mike Chen</span>
                    <span>•</span>
                    <span>Oct 12, 2023</span>
                  </div>
                </div>
              </div>
              {/* Blog Item 3 */}
              <div className="bg-gray-50 rounded-2xl flex gap-4 p-3 shadow-sm hover:shadow-md transition">
                <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80" alt="Blog 3" className="w-20 h-20 object-cover rounded-xl" width={100} height={100}/>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">RUNNING</span>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">The Best Running Shoes For Every Terrain, Find Your Fit</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>by Hannah Smith</span>
                    <span>•</span>
                    <span>Oct 12, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

const SkillSection = () => {
  return(
    <section className="w-full bg-white py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="block text-gray-500 italic mb-1">&ndash; My Favorite Tools</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-blue-600 italic font-medium">Exploring the Tools </span>
            <span className="text-black">Behind My Designs</span>
          </h2>
        </div>
        <div className="flex justify-between">
          {/* Tool 1: Figma */}
          <div className="flex flex-col items-center bg-gray-50 rounded-full py-8 px-4 w-1/6 shadow-sm">
            <FaFigma className="mb-4" size={48} color="#000"/>
            <span className="text-2xl font-bold mb-1">90%</span>
            <span className="text-gray-500">Figma</span>
          </div>
          {/* Tool 5: VSCodes */}
          <div className="flex flex-col items-center bg-gray-50 rounded-full py-8 px-4 w-1/6 shadow-sm">
            <VscVscode className="mb-4" size={48} color="#000"/>
            <span className="text-2xl font-bold mb-1">80%</span>
            <span className="text-gray-500">VSCode</span>
          </div>
          {/* Tool 2: ReactJs */}
          <div className="flex flex-col items-center bg-gray-50 rounded-full py-8 px-4 w-1/6 shadow-sm">
            <FaReact className="mb-4" size={48} color="#000"/>
            <span className="text-2xl font-bold mb-1">80%</span>
            <span className="text-gray-500">ReactJs</span>
          </div>
          {/* Tool 3: NodeJs */}
          <div className="flex flex-col items-center bg-gray-50 rounded-full py-8 px-4 w-1/6 shadow-sm">
            <FaNodeJs className="mb-4" size={48} color="#000"/>
            <span className="text-2xl font-bold mb-1">60%</span>
            <span className="text-gray-500">NodeJs</span>
          </div>
          {/* Tool 4: Shopify */}
          <div className="flex flex-col items-center bg-gray-50 rounded-full py-8 px-4 w-1/6 shadow-sm">
            <FaShopify className="mb-4" size={48} color="#000"/>
            <span className="text-2xl font-bold mb-1">90%</span>
            <span className="text-gray-500">Shopify</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* Navigation Bar */}
      <NavigationBar/>

      {/* Hero Section */}
      <HeroSection/>

      {/* Services Section */}
      <ServiceSection/>

      {/* Academic & Professional Journey Section */}
      <JourneySection />

      {/* Blog Section */}
      <BlogSection/>

      {/* Tools Section */}
      <SkillSection/>

      {/* Bottom Skill/Service Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white flex items-center justify-center gap-8 py-3 text-sm font-medium z-20">
        <span>Digital Marketing</span>
        <span className="mx-2">★</span>
        <span>Website Development</span>
        <span className="mx-2">★</span>
        <span>UIUX Design</span>
        <span className="mx-2">★</span>
        <span>Email Marketing</span>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}


