
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Kennedy Southern</title>
        <meta name="description" content="Learn more about Kennedy Southern, data analytics professional with a passion for science and sustainability." />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-24 flex justify-center items-start">
        <div className="max-w-3xl space-y-8 text-left">
          <h1 className="text-4xl font-bold text-center">About Me</h1>
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
      </main>
    </>
  )
}
