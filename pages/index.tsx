
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kennedy Southern</title>
        <meta name="description" content="Personal site for Kennedy Southern" />
      </Head>
      
      {/* Hero Layout */}
      <main id="home" className="bg-[#fdeef4] text-pink-500 min-h-screen w-full flex flex-col justify-center px-6">
        {/* Nav Bar */}
        <div className="w-full max-w-6xl flex justify-between items-center pt-6 mb-12">
    
          {/* Left Side: Name */}
          <h1 className="text-3xl sm:text-3xl font-bold ml-[120px]">Kennedy Southern</h1>

          {/* Right Side: Navigation Buttons */}
          <nav className="flex gap-4">
            <a
              href="#home"
              className="px-6 py-2 rounded-full bg-white text-pink-500 font-semibold shadow hover:bg-pink-100 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-6 py-2 rounded-full bg-white text-pink-500 font-semibold shadow hover:bg-pink-100 transition"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-white text-pink-500 font-semibold shadow hover:bg-pink-100 transition"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Hero Content Centered */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl w-full">
            {/* PHOTO and TEXT go here as-is */}    
        
          {/* PHOTO - LEFT SIDE */}
          <div className="flex-shrink-0">
            <Image
              src="/kennedy-headshot.png"
              alt="Kennedy Southern"
              width={300}
              height={300}
              className="rounded-full shadow-xl ml-[150px]"
              priority
            />
          </div>
          
          {/* TEXT - RIGHT SIDE */}
          <div className="text-center md:text-left space-y-4">
            <p className="text-pink-500 text-lg font-medium ml-[100px]">Hi there, I&apos;m</p>
            <h1 className="text-4xl sm:text-5xl font-bold ml-[100px]">Kennedy Southern</h1>
            <p className="text-pink-500 text-xl sm:text-2xl font-semibold ml-[100px]">Data Analyst</p>
            
            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-6 pt-4 text-gray-400 text-xl">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kennedy-southern-b2a8ab1a2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition ml-[100px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5C1.12 6 0 4.88 0 3.5S1.12 1 2.49 1C3.86 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.3-2.2 4.1-2.2 4.1 0 4.6 2.7 4.6 6.2V24h-5v-8.6c0-2-.7-3.4-2.5-3.4-1.4 0-2.2.9-2.5 1.8-.1.3-.1.7-.1 1v9.2h-5V8z" />
                </svg>
              </a>
              
              {/* Resume */}
              <a
                href="/kennedy-resume.pdf"
                download
                aria-label="Download Resume"
                className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 20h14a1 1 0 0 0 1-1v-6h-2v5H6v-5H4v6a1 1 0 0 0 1 1zm7-18L5.33 9h3.67v4h4V9h3.67L12 2z" />
                </svg>
              </a>
              
              {/* Email */}
              <a
                href="mailto:kennedyannsouthern@gmail.com"
                aria-label="Email"
                className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 4.5h21a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5zm0 1.5v.511l10.5 6.737 10.5-6.737V6h-21zm21 1.978-8.93 5.73a1.5 1.5 0 0 1-1.14.255 1.5 1.5 0 0 1-1.14-.255L1.5 7.978V18h21V7.978z" />
                </svg>
              </a>
              
              {/* Phone */}
              <a
                href="tel:15743614587"
                aria-label="Phone"
                className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1c-9.39 0-17-7.61-17-17a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.26 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2z" />
                </svg>
              </a>
            </div>        
          </div>
        </div>
      </div>
      
{/* ABOUT ME */}
        <section id="about" className="bg-[#fdeef4] text-pink-500 px-6 py-24 flex justify-center">
          <div className="max-w-3xl space-y-8 text-left">
            <h2 className="text-3xl font-bold text-center text-pink-500">I Love Data Analytics!</h2>
            <p className="text-pink-500 text-lg leading-relaxed">
              I am a data analytics professional with a strong foundation in biochemistry and public health. My mission is to use data to improve decision-making and promote healthier, more sustainable outcomes across industries.
            </p>
            <p className="text-pink-500 text-lg leading-relaxed">
              Growing up in a small Midwestern town, I developed a deep appreciation for nature and lifelong curiosity about how the world works. Outside of work, I enjoy hiking, backpacking, kayaking, skiing — anything that connects me to the outdoors. I also value learning through books, film, and new experiences that broaden my thinking.
            </p>
            <p className="text-pink-500 text-lg leading-relaxed">
              I believe data can be a powerful force for good. I am committed to a career that blends scientific thinking with data-driven strategy, always seeking opportunities to learn, grow, and make a meaningful impact in health, science, and beyond.
            </p>
          </div>
        </section>
        
        {/* SKILLS */}
        <section className="bg-[#fdeef4] text-pink-500 px-6 py-24 flex justify-center">
          <div className="max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold">Skills</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Here you can see my skills. One of the fascinations of the data analytics world is the momentary changes of technologies, but I try to update my knowledge every day and experience new technologies.
            </p>
            
            {/* Skill Bubbles */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {[
                'R', 'SAS', 'SQL', 'Python', 'Excel', 'Tableau',
                'Power BI', 'GitHub', 'Google Analytics', 'Microsoft Office',
                'JavaScript', 'Tailwind Css'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-pink-500 text-white font-semibold text-sm hover:bg-pink-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
        
        {/* My EXPERIENCES */}
        <section className="bg-[#fdeef4] text-pink-500 px-6 py-24 flex justify-center">
          <div className="max-w-3xl w-full space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">My Experiences</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                One of the most beautiful parts of every person's life, the part of their work life. I am very happy to have spent this part of my life with the people I loved, and it has made my interest in my work more and more.
              </p>
            </div>
            
            {/* Experience Cards */}
            <div className="space-y-6">
              {/* EXPERIENCE CARD */}
              <div className="relative border border-gray-700 rounded-xl p-6 bg-gray-900">
                {/* Top Row: Logo + Years */}
                <div className="flex justify-between items-start mb-4">
                  <img src="/logos/company1.png" alt="Company Logo" className="w-10 h-10 object-contain" />
                  <span className="text-sm text-gray-400">2021 – 2023</span>
                </div>
                <h3 className="text-lg font-semibold text-pink-500">Data Analyst</h3>
                <p className="text-sm text-gray-400 mb-2">Shah Properties LLC</p>
                <p className="text-sm text-gray-300">
                  - Developed predictive models to forecast real estate availabilities, enhancing decision-making for property acquisitions and maximizing profitability.
                </p>
                <p className="text-sm text-gray-300">
                  - Conducted data extraction and analysis from property listings to provide actionable insights for transitioning properties into tenant rentals.
                </p>
                <p className="text-sm text-gray-300">
                  - Identified and engaged with prospective tenants for commercial real estate, contributing to occupancy rates and revenue growth.
                </p>
                <p className="text-sm text-gray-300">
                - Analyzed and compared invoices against quotes for ongoing projects to ensure financial accuracy and cost control.
                </p>  
              </div>

              {/* Symbiosis */}
              <div className="relative border border-gray-700 rounded-xl p-6 bg-gray-900">
                <div className="flex justify-between items-start mb-4">
                  <img src="/logos/company2.png" alt="Company Logo" className="w-10 h-10 object-contain" />
                  <span className="text-sm text-gray-400">2019 – 2021</span>
                </div>
                <h3 className="text-lg font-semibold text-pink-500">Project Coordinator</h3>
                <p className="text-sm text-gray-400 mb-2">Symbiosis</p>
                <p className="text-sm text-gray-300">
                  - Developed and implemented strategies to promote healthy living through innovative product solutions.
                </p>
                <p className="text-sm text-gray-300">
                  - Designed and created eco-friendly and sustainable living spaces for both residential and commercial clients.
                </p>
                <p className="text-sm text-gray-300">
                  - Collaborated with clients to integrate public health principles with interior design, aligning with personal, familial, or community health objectives.
                </p>
              </div>

              {/* University of Michigan */}
              <div className="relative border border-gray-700 rounded-xl p-6 bg-gray-900">
                <div className="flex justify-between items-start mb-4">
                  <img src="/logos/company2.png" alt="Company Logo" className="w-10 h-10 object-contain" />
                  <span className="text-sm text-gray-400">2019 – 2021</span>
                </div>
                <h3 className="text-lg font-semibold text-pink-500">Public Health Ambassador</h3>
                <p className="text-sm text-gray-400 mb-2">University of Michigan, Ann Arbor</p>
                <p className="text-sm text-gray-300">
                  - Educated students about how to prevent the spread of COVID-19.
                </p>
                <p className="text-sm text-gray-300">
                  - Designed informational guides about COVID-19.
                </p>
                <p className="text-sm text-gray-300">
                  - Coordinated canvassing operations to monitor compliance with state, city, and university COVID-19 guidelines.
                </p>
              </div>

              {/* Manchester University */}
              <div className="relative border border-gray-700 rounded-xl p-6 bg-gray-900">
                <div className="flex justify-between items-start mb-4">
                  <img src="/logos/company2.png" alt="Company Logo" className="w-10 h-10 object-contain" />
                  <span className="text-sm text-gray-400">2019 – 2021</span>
                </div>
                <h3 className="text-lg font-semibold text-pink-500">Medical Practicum</h3>
                <p className="text-sm text-gray-400 mb-2">Manchester University</p>
                <p className="text-sm text-gray-300">
                  - Studied the rural health care system.
                </p>
                <p className="text-sm text-gray-300">
                  - Learned how to be resourceful with limited supplies.
                </p>
                <p className="text-sm text-gray-300">
                  - Facilitated doctors in providing basic healthcare services.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* HIRING SECTION */}
        <section className="bg-[#fdeef4] text-black px-6 py-24 flex justify-center">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-pink-500">I Am Available for Hire!</h2>
            <a
              href="#contact"
              className="inline-block bg-pink-500 text-pink-500 text-lg font-medium px-6 py-3 rounded-full hover:bg-pink-600 transition"
            >
              Hire Me Now
            </a>
          </div>
        </section>
             
        {/* CONTACT */}
        <section id="contact" className="bg-[#fdeef4] text-pink-500 px-6 py-24 flex justify-center">
          <div className="w-full max-w-2xl space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="text-gray-400 text-lg">
                Feel free to reach out by filling out the form or contacting me directly.
              </p>
            </div>

            {/* Contact Info */}
            <div className="text-center space-y-2 text-gray-300 text-sm">
              <p>Email: <a href="mailto:kennedyannsouthern@gmail.com" className="underline hover:text-[#6c63ff]">kennedyannsouthern@gmail.com</a></p>
              <p>Phone: <a href="tel:+15743614587" className="underline hover:text-[#6c63ff]">(574) 361-4587</a></p>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/xanjvbvy"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="New submission from Kennedy's site" />
              
              <div className="flex flex-col">
                <label className="text-sm mb-1">Name</label>
                <input type="text" name="name" className="p-2 bg-gray-900 border border-gray-700 rounded text-white" required />
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm mb-1">Email</label>
                <input type="email" name="email" className="p-2 bg-gray-900 border border-gray-700 rounded text-white" required />
              </div>
               
              <div className="flex flex-col">
                <label className="text-sm mb-1">Subject</label>
                <input type="text" name="subject" className="p-2 bg-gray-900 border border-gray-700 rounded text-white" />
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm mb-1">Message</label>
                <textarea name="message" rows={4} className="p-2 bg-gray-900 border border-gray-700 rounded text-white" required />
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-pink-500 text-pink-500 py-2 px-4 rounded hover:bg-pink-600 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
