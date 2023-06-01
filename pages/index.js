import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <div>
        <Head>
          <title>SnapTrivia - Home</title>
        </Head>
        <header className="bg-gradient-to-r from-blue-500 to-indigo-500 py-6">
          <div className="container mx-auto flex items-center justify-between px-4">
            <h1 className="text-white font-bold text-4xl">SnapTrivia</h1>
            <nav className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-200">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                Categories
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                Contact
              </a>
              <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-full">
                Log In
              </button>
            </nav>
          </div>
        </header>

        <main>
          <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-4"
                  >
                    Challenge Your Knowledge
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl mb-4"
                  >
                    Discover a world of fascinating trivia and put your
                    knowledge to the test with SnapTrivia's engaging quizzes.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full"
                  >
                    Start Quiz
                  </motion.button>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg shadow-lg p-6"
                >
                  <svg
                    className="w-48 h-48 text-white mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-15c-3.31 0-6 2.69-6 6 0 .92.21 1.79.57 2.57l1.43-1.43c-.22-.45-.36-.95-.36-1.57 0-2.21 1.79-4 4-4 .61 0 1.17.14 1.69.37l1.43-1.43C13.79 3.21 12.92 3 12 3zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>

                  <h3 className="text-2xl font-bold mb-4 text-white text-center">
                    SnapTrivia
                  </h3>
                  <p className="text-xl text-white text-center">
                    Put your knowledge to the test!
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="bg-white py-12">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-8 text-center"
              >
                How It Works
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <img
                    className="w-24 h-24 mb-4"
                    src="/icon1.svg"
                    alt="Icon 1"
                  />
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl font-bold mb-2"
                  >
                    Choose a Category
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg text-center"
                  >
                    Select from a wide range of categories that suit your
                    interests and preferences.
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <img
                    className="w-24 h-24 mb-4"
                    src="/icon2.svg"
                    alt="Icon 2"
                  />
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-xl font-bold mb-2"
                  >
                    Answer Questions
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-lg text-center"
                  >
                    Answer a series of thought-provoking questions within a
                    limited time frame.
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <img
                    className="w-24 h-24 mb-4"
                    src="/icon3.svg"
                    alt="Icon 3"
                  />
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl font-bold mb-2"
                  >
                    Check Your Score
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg text-center"
                  >
                    Get instant feedback on your performance and see how you
                    stack up against others.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </section>
          <section className="bg-blue-500 py-12">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-8 text-white text-center"
              >
                Join SnapTrivia Today
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center"
              >
                <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-3 px-6 rounded-full">
                  Get Started
                </button>
              </motion.div>
            </div>
          </section>
          <section className="bg-gray-200 py-12">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-8 text-center"
              >
                Testimonials
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gray-100 rounded-lg p-8"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg mb-4"
                  >
                    "SnapTrivia is the best quiz app I've ever used. The
                    questions are diverse and challenging, and the interface is
                    user-friendly. Highly recommended!"
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-600 font-bold"
                  >
                    - John Doe
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-gray-100 rounded-lg p-8"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg mb-4"
                  >
                    "As a trivia enthusiast, SnapTrivia has become my go-to app
                    for quick quizzes. The competitive multiplayer feature adds
                    an extra level of excitement!"
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-gray-600 font-bold"
                  >
                    - Jane Smith
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-200 py-4">
          <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} SnapTrivia. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
