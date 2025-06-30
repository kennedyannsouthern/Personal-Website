
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Kennedy Southern</title>
        <meta name="description" content="Get in touch with Kennedy Southern" />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-24 flex justify-center">
        <div className="w-full max-w-2xl space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold">Contact</h1>
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
      </main>
    </>
  )
}
