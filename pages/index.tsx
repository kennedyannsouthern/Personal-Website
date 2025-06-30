
import Head from 'next/head'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kennedy Southern</title>
        <meta name="description" content="Personal site for Kennedy Southern" />
      </Head>

      {/* Hero Layout */}
      <main className="bg-[#fdeef4] text-white min-h-screen w-full flex flex-col items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl w-full">

          {/* PHOTO - LEFT SIDE */}
          <div className="flex-shrink-0">
            <Image
              src="/kennedy-headshot.png"
              alt="Kennedy Southern"
              width={300}
              height={300}
              className="rounded-full shadow-xl"
              priority
            />
          </div>

          {/* TEXT - RIGHT SIDE */}
          <div className="text-center md:text-left space-y-4">
            <p className="text-pink-500 text-lg font-medium">Hi there, I&apos;m</p>
            <h1 className="text-4xl sm:text-5xl font-bold">Kennedy Southern</h1>
            <div className="text-pink-500 text-xl sm:text-2xl font-semibold">
              <Typewriter options={{ strings: ['Data Analyst'], autoStart: true, loop: true }} />
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-6 pt-4 text-gray-400 text-xl">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kennedy-southern-b2a8ab1a2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition"
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
      </main>
    </>
  )
}
