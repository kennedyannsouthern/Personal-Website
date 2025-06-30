
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
<main className="bg-black text-white min-h-screen flex items-center justify-center px-4">
  <div className="text-center space-y-6 max-w-xl">
    <Image
      src="/kennedy-headshot.jpg"
      alt="Kennedy Southern"
      width={120}
      height={120}
      className="mx-auto rounded-full border border-gray-700"
    />
    <h1 className="text-4xl font-bold">Kennedy Southern</h1>
    <p className="text-gray-400 text-lg">
      Data-Driven Solutions for a Better World
    </p>
    <div className="flex justify-center space-x-6 text-sm">
      <a href="mailto:kennedyannsouthern@gmail.com" className="text-gray-300 hover:text-white transition">
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/kennedy-southern-b2a8ab1a2/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition"
      >
        LinkedIn
      </a>
    </div>
  </div>
</main>
    </div>
  )
}
