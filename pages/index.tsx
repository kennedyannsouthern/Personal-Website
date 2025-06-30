
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

  {/* Hero */}
  <div className="h-screen flex flex-col justify-center items-center space-y-6 px-4 text-center">
    <Image
      src="/kennedy-headshot.jpg"
      alt="Kennedy Southern"
      width={160}
      height={160}
      className="rounded-full border-2 border-white shadow-md"
    />
    <h1 className="text-4xl sm:text-5xl font-bold">Hi there, I'm Kennedy Southern</h1>
    <p className="text-gray-400 text-lg max-w-xl">
      Data Analytics Professional applying data to solve real-world problems in health, science, and sustainability.
    </p>

    {/* Social Icons */}
    <div className="flex gap-6 pt-4">
      {/* Email */}
      <a href="mailto:kennedyannsouthern@gmail.com" aria-label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l4-4m-4 4l4 4" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/kennedy-southern-b2a8ab1a2/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5C1.12 6 0 4.88 0 3.5S1.12 1 2.49 1C3.86 1 4.98 2.12 4.98 3.5zM0 8h5V24H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.3-2.2 4.1-2.2C21 8 24 10 24 15v9h-5v-8c0-2-.7-3.4-2.5-3.4-1.4 0-2.2.9-2.5 1.8-.1.3-.1.7-.1 1v8.6h-5V8z"/>
        </svg>
      </a>
    </div>
  </div>
</main>

{/* ABOUT ME */}
<section className="bg-black text-white px-6 py-24 flex justify-center">
  <div className="max-w-2xl text-center space-y-6">
    <h2 className="text-3xl font-semibold">About Me</h2>
    <p className="text-gray-400 text-lg leading-relaxed">
      I’m a data-driven problem solver with a background in biochemistry and public health. I specialize in transforming complex datasets into actionable insights to improve outcomes in health, science, and sustainability.
    </p>
  </div>
</section>

</>
 
