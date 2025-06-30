
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
<>
  <Head>
    <title>Kennedy Southern</title>
    <meta name="description" content="Personal site for Kennedy Southern" />
  </Head>

  <main className="bg-black text-white min-h-screen w-full">
  {/* Top Left Name (Header) */}
  <header className="absolute top-6 left-6 text-lg font-semibold tracking-tight">
    Kennedy Southern
  </header>

  {/* Hero Layout */}
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

    {/* Social Media Icons */}
    <div className="flex gap-6 pt-4">
      {/* Email */}
      <a href="mailto:kennedyannsouthern@gmail.com" aria-label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4h16v16H4V4zm16 0L4 20" />
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
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.5-.64-1.5-1.4 0-.77.55-1.3 1.44-1.3.89 0 1.5.53 1.52 1.3 0 .76-.59 1.4-1.46 1.4zm13.5 11.3h-3v-5.5c0-1.1-.4-1.85-1.38-1.85-.75 0-1.2.51-1.4 1.01-.07.18-.09.43-.09.68v5.66h-3s.04-9.2 0-10.2h3v1.45c.4-.62 1.13-1.51 2.75-1.51 2 0 3.5 1.31 3.5 4.14v6.12z" />
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
 
