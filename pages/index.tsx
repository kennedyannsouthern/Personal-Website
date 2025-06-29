
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kennedy Southern</title>
        <meta name="description" content="Personal site for Kennedy Southern" />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-12 font-sans">
        <section className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/kennedy-headshot.jpg"
            alt="Kennedy Southern"
            width={120}
            height={120}
            className="rounded-full border border-white"
          />
          <h1 className="text-3xl font-bold">Kennedy Southern</h1>
          <p className="text-lg text-gray-400">
            Data-Driven Solutions for a Better World
          </p>
          <div className="text-sm text-gray-400 mt-2">
            <p>Email: kennedyannsouthern@gmail.com</p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/kennedy-southern-b2a8ab1a2/"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </p>
          </div>
        </section>

        <section className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300">
            Data Analytics Professional with a background in biochemistry and public health, offering a
            unique blend of scientific insight and analytical expertise. Skilled in transforming complex
            datasets into actionable insights that support strategic decision-making and translating complex
            systems into scalable, high-impact programs. Known for strong organization, time management,
            and a commitment to data-driven impact. Passionate about applying data to solve real-world
            problems in health, science, and sustainability.
          </p>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <a
            href="/Resume - LinkedIn.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Download PDF
          </a>
        </section>
      </main>
    </div>
  )
}
