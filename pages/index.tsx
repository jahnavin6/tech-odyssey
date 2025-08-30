import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Odyssey | Jahnavi Nuthalapati</title>
        <meta
          name="description"
          content="Jahnavi's personal portfolio exploring AI, infrastructure, and leadership"
        />
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Mission Control
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-center max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I'm Jahnavi, exploring automation, AI, and leadership. Choose a path to begin your
          journey.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-4xl">
          <a
            href="/ai"
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">AI & Data</h2>
            <p>Discover my projects in machine learning, NLP, and more.</p>
          </a>
          <a
            href="/infra"
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Infra & Cloud</h2>
            <p>Explore large-scale infrastructure, automation, and dashboards.</p>
          </a>
          <a
            href="/leadership"
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Leadership & Behavior</h2>
            <p>Learn about my leadership philosophy and collaborative achievements.</p>
          </a>
        </div>
      </main>
    </>
  );
}
