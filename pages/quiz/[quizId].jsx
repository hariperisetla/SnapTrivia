import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import he from "he";
import QuizScore from "@/components/quiz/QuizScore";

const QuizSessionPage = () => {
  const router = useRouter();
  const { quizId } = router.query;
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [startNewQuiz, setStartNewQuiz] = useState(false);
  const [timer, setTimer] = useState(10); // Set the time limit for each question (in seconds)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const storedQuizData = localStorage.getItem("quizData");

        if (storedQuizData) {
          setQuizData(JSON.parse(storedQuizData));
          setLoading(false);
        } else {
          const { category, difficulty } = router.query;
          const response = await fetch(
            `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
          );
          const data = await response.json();
          setQuizData(data.results);
          localStorage.setItem("quizData", JSON.stringify(data.results));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, [quizId]);

  const handleStartNewQuiz = () => {
    localStorage.removeItem("quizData");
    setStartNewQuiz(true);
  };

  const handleAnswerClick = (answer) => {
    if (selectedAnswer === answer) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(answer);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestionIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setTimer(10); // Reset the timer for the next question
    } else {
      setShowResult(true);
      localStorage.removeItem("quizData"); // Remove quizData from localStorage when reaching the score screen
    }
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      handleNextQuestion();
    }

    return () => clearInterval(timerInterval);
  }, [timer]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (currentQuestionIndex < quizData.length - 1) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [currentQuestionIndex, quizData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4">
      {/* <h1 className="text-4xl font-bold mb-6">Quiz Session</h1> */}
      {quizData && !showResult && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {he.decode(quizData[currentQuestionIndex].category)}
          </h2>
          <h3 className="text-lg mb-4">
            {he.decode(quizData[currentQuestionIndex].question)}
          </h3>
          <ul className="grid grid-cols-1 gap-4">
            {quizData[currentQuestionIndex].incorrect_answers.map(
              (answer, answerIndex) => (
                <li
                  key={answerIndex}
                  className={`${
                    selectedAnswer === answer
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  } rounded-md p-4 cursor-pointer shadow-md`}
                  onClick={() => handleAnswerClick(answer)}
                >
                  {he.decode(answer)}
                </li>
              )
            )}
            <li
              className={`${
                selectedAnswer === quizData[currentQuestionIndex].correct_answer
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              } rounded-md p-4 cursor-pointer shadow-md`}
              onClick={() =>
                handleAnswerClick(
                  he.decode(quizData[currentQuestionIndex].correct_answer)
                )
              }
            >
              {he.decode(quizData[currentQuestionIndex].correct_answer)}
            </li>
          </ul>
          <div className="flex flex-col items-center justify-between mt-4">
            <div className="w-full flex space-x-5 justify-center items-center">
              <div className="relative w-full h-2 bg-gray-200">
                <div
                  className="absolute top-0 left-0 h-2 bg-blue-500"
                  style={{ width: `${(timer / 10) * 100}%` }}
                ></div>
              </div>
              <div className="timer text-lg font-semibold">{timer}</div>
            </div>
            <button
              className={`${
                selectedAnswer ? "bg-blue-500" : "bg-gray-400"
              } hover:bg-blue-600 text-white rounded-md px-4 py-2 focus:outline-none`}
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
            >
              Next Question
            </button>
          </div>
        </div>
      )}
      {showResult && <QuizScore score={score} />}
    </div>
  );
};

export default QuizSessionPage;
