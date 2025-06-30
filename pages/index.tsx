
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
  <Head>
    <title>Kennedy Southern</title>
    <meta name="description" content="Personal site for Kennedy Southern" />
  </Head>

<main className="bg-black text-white h-screen w-full flex items-center justify-center">
  <div className="flex flex-col items-center text-center space-y-6 px-6">
    <Image
      src="/kennedy-headshot.jpg"
      alt="Kennedy Southern"
      width={120}
      height={120}
      className="rounded-full border-2 border-white shadow-md"
    />
    <h1 className="text-5xl font-semibold tracking-tight leading-tight">
      Kennedy Southern
    </h1>
    <p className="text-gray-400 text-lg max-w-md">
      Data Analytics Professional applying data to solve real-world problems in health, science, and sustainability.
    </p>
    <div className="flex gap-8 pt-2 text-sm">
      <a href="mailto:kennedyannsouthern@gmail.com" className="text-gray-400 hover:text-white transition">
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/kennedy-southern-b2a8ab1a2/"
        className="text-gray-400 hover:text-white transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </div>
</main>

</>
