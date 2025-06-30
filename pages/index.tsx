
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
      <a href="mailto:kennedyannsouthern@gmail.com" aria-label="Email" className="hover:text-white text-gray-400 transition">
        ✉️
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/kennedy-southern-b2a8ab1a2/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-white text-gray-400 transition text-xl"
      >
        in
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
 
