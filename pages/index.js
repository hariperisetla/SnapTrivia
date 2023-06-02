import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { FiSearch, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import LeaderBoardSection from "@/components/Home/LeaderBoardSection";

export default function Home() {
  return (
    <main>
      <div>
        <Head>
          <title>SnapTrivia - Home</title>
        </Head>

        <main>
          <section className="bg-gray-100 py-20 md:py-12 h-[70vh] flex justify-center items-center">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-4 pt-20"
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
                    knowledge to the test with SnapTrivia&apos;s engaging
                    quizzes.
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
                    className="w-48 h-64 text-white mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                    fill="currentColor"
                  >
                    <path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 501 191C 626 191 690 275 690 375C 690 475 639 483 595 513C 573 525 558 553 559 575C 559 591 554 602 541 601C 541 601 460 601 460 601C 446 601 436 581 436 570C 436 503 441 488 476 454C 512 421 566 408 567 373C 566 344 549 308 495 306C 463 303 445 314 411 361C 400 373 384 382 372 373C 372 373 318 333 318 333C 309 323 303 307 312 293C 362 218 401 191 501 191C 501 191 501 191 501 191M 500 625C 541 625 575 659 575 700C 576 742 540 776 500 775C 457 775 426 739 425 700C 425 659 459 625 500 625C 500 625 500 625 500 625" />
                  </svg>

                  <h3 className="text-2xl font-bold mb-4 text-white text-center">
                    SnapTrivia
                  </h3>

                  {/* https://friconix.com/icon/fi-cnsuxl-question-mark/ */}
                  <p className="text-xl text-white text-center">
                    Put your knowledge to the test!
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-32">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">About SnapTrivia</h2>
                <p className="text-xl text-gray-700 mb-6">
                  Discover a world of fascinating trivia and put your knowledge
                  to the test with SnapTrivia&apos;s engaging quizzes.
                </p>
                <a
                  href="/about"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-32">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="flex flex-col items-center">
                  <FiSearch className="text-blue-500 text-4xl mb-4" />
                  <h3 className="text-xl font-bold mb-2">Find a Quiz</h3>
                  <p className="text-gray-600">
                    Explore a wide range of quiz categories and choose the
                    topics that interest you.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <FiCheckCircle className="text-blue-500 text-4xl mb-4" />
                  <h3 className="text-xl font-bold mb-2">Answer Questions</h3>
                  <p className="text-gray-600">
                    Test your knowledge by answering a series of fun and
                    challenging questions.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <FiTrendingUp className="text-blue-500 text-4xl mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Track Your Progress
                  </h3>
                  <p className="text-gray-600">
                    Monitor your performance, see your scores, and track your
                    progress over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* <QuizCategoriesSection /> */}

          <LeaderBoardSection />

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
                    &quot;SnapTrivia is the best quiz app I&apos;ve ever used.
                    The questions are diverse and challenging, and the interface
                    is user-friendly. Highly recommended!&quot;
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
                    &quot;As a trivia enthusiast, SnapTrivia has become my go-to
                    app for quick quizzes. The competitive multiplayer feature
                    adds an extra level of excitement!&quot;
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

          <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Get Started with SnapTrivia
                </h2>
                <p className="text-xl mb-8">
                  Join thousands of users and start challenging your knowledge
                  today.
                </p>
                <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md">
                  Sign Up Now
                </button>
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
