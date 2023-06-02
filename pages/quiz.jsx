import QuizSession from "@/components/quiz/QuizSession";
import Link from "next/link";
import { useState } from "react";

const QuizOverviewPage = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    // Set the flag to trigger the quiz session component
    setStartQuiz(true);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
      <div className="max-w-lg px-6 py-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome to SnapTrivia!
        </h2>
        <p className="text-gray-600 mb-6">
          SnapTrivia is not just your average trivia game. It&apos;s a
          fast-paced, exciting, and fun quiz experience designed to test your
          knowledge and challenge your friends. Get ready to dive into a world
          of mind-boggling questions and show off your expertise in various
          categories.
        </p>
        <p className="text-gray-600 mb-6">
          With SnapTrivia, you can choose from a wide range of categories and
          difficulty levels to customize your quiz. Challenge yourself with
          easy, medium, or hard questions, and compete against the clock to earn
          points and climb the leaderboard.
        </p>
        <p className="text-gray-600 mb-6">
          What makes SnapTrivia special is its unique feature of rapid-fire
          quizzes. You&apos;ll have a limited time to answer each question,
          adding an extra level of excitement and intensity to the game. Think
          fast, trust your instincts, and see how many questions you can answer
          correctly before the time runs out!
        </p>
        <p className="text-gray-600 mb-6">
          Are you ready to put your knowledge to the test? Join SnapTrivia today
          and embark on an unforgettable trivia adventure!
        </p>
        <div className="flex justify-center">
          <Link
            href={"/quiz/select-category"}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition duration-300 ease-in-out"
          >
            Start Quiz
          </Link>
        </div>
        {/* Render the quiz session component when the flag is true */}
        {startQuiz && <QuizSession />}
      </div>
    </div>
  );
};

export default QuizOverviewPage;
