import Link from "next/link";
import React from "react";

const QuizScore = ({ score }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
      <p className="mb-4">Score: {score}</p>
      <p>
        Start a new quiz and sign up to save your results and compete on the
        leaderboard!
      </p>
      <div className="flex justify-center mt-4">
        <Link
          href={"/quiz/select-category"}
          passHref
          className="bg-blue-500 text-white rounded-md p-2 mr-4"
        >
          Start a New Quiz
        </Link>
        <button className="bg-blue-500 text-white rounded-md p-2">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default QuizScore;
