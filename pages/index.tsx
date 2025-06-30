
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kennedy Southern</title>
        <meta name="description" content="Personal site for Kennedy Southern" />
      </Head>

      <main className="bg-black text-white min-h-screen w-full relative">
        {/* Top Left Name */}
        <header className="absolute top-6 left-6 text-lg font-semibold tracking-tight">
          Kennedy Southern
        </header>

        {/* Hero Layout */}
        <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4">
          <Image
            src="/kennedy-headshot.jpg"
            alt="Kennedy Southern"
            width={260}
            height={260}
            className="rounded-full border-2 border-white shadow-x1"
          />
          <h1 className="text-4xl sm:text-5xl font-bold">Hi There, I&apos;m Kennedy Southern</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Data-Driven Solutions for a Better World
          </p>

          {/* Social Media */}
          <div className="flex gap-6 pt-4 text-gray-400 text-xl">
            <a
              href="https://www.linkedin.com/in/kennedy-southern-b2a8ab1a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5C1.12 6 0 4.88 0 3.5S1.12 1 2.49 1C3.86 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.3-2.2 4.1-2.2 4.1 0 4.6 2.7 4.6 6.2V24h-5v-8.6c0-2-.7-3.4-2.5-3.4-1.4 0-2.2.9-2.5 1.8-.1.3-.1.7-.1 1v9.2h-5V8z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* ABOUT ME SECTION */}
        <section className="bg-black text-white px-6 py-24 flex justify-center">
          <div className="max-w-3xl space-y-8 text-left">
            <h2 className="text-3xl font-bold text-center">About Me</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a data analytics professional with a strong foundation in biochemistry and public health. My mission is to use data to improve decision-making and promote healthier, more sustainable outcomes across industries.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Growing up in a small Midwestern town, I developed a deep appreciation for nature and lifelong curiosity about how the world works. Outside of work, I enjoy hiking, backpacking, kayaking, skiing — anything that connects me to the outdoors. I also value learning through books, film, and new experiences that broaden my thinking.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I believe data can be a powerful force for good. I am committed to a career that blends scientific thinking with data-driven strategy, always seeking opportunities to learn, grow, and make a meaningful impact in health, science, and beyond.
            </p>
          </div>
        </section>
        
        {/* CONTACT */}
        <section className="bg-black text-white px-6 py-24 flex justify-center">
          <div className="w-full max-w-2xl space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="text-gray-400 text-lg">
                Feel free to reach out by filling out the form or contacting me directly.
              </p>
            </div>

            {/* Contact Info */}
            <div className="text-center space-y-2 text-gray-300 text-sm">
              <p>Email: <a href="mailto:kennedyannsouthern@gmail.com" className="underline hover:text-white">kennedyannsouthern@gmail.com</a></p>
              <p>Phone: <a href="tel:+15743614587" className="underline hover:text-white">(574) 361-4587</a></p>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              action="https://formspree.io/f/xanjvbvy"
              method="POST'
              className="space-y-4"
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
                className="mt-4 w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
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
