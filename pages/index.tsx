
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

        {/* Hero Section */}
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

          {/* Social Links */}
          <div className="flex gap-6 pt-4 text-gray-400 text-xl">
            <a href="mailto:kennedyannsouthern@gmail.com" className="hover:text-white transition">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/kennedy-southern-b2a8ab1a2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-gray-400 hover:text-white transition"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5C1.12 6 0 4.88 0 3.5S1.12 1 2.49 1C3.86 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.3-2.2 4.1-2.2 4.1 0 4.6 2.7 4.6 6.2V24h-5v-8.6c0-2-.7-3.4-2.5-3.4-1.4 0-2.2.9-2.5 1.8-.1.3-.1.7-.1 1v9.2h-5V8z" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
