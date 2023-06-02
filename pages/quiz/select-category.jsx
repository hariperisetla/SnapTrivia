import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const SelectCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [difficulties, setDifficulties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of categories from the API
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api_category.php"
        );
        setCategories(response.data.trivia_categories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    // Fetch the list of difficulties
    const fetchDifficulties = async () => {
      const difficulties = ["easy", "medium", "hard"];
      setDifficulties(difficulties);
    };

    fetchCategories();
    fetchDifficulties();
  }, []);

  const router = useRouter();

  const handleStartNewQuiz = async (e) => {
    try {
      e.preventDefault();
      const quizId = await uuidv4();

      // Redirect the user to the quiz session page with the generated ID, category, and difficulty
      router.push(
        `/quiz/${quizId}?category=${selectedCategory}&difficulty=${selectedDifficulty}`
      );
    } catch (error) {
      console.error("Error generating quiz ID:", error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Select a Category and Difficulty
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
            <span className="ml-2">Loading...</span>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label htmlFor="category" className="block mb-2 font-semibold">
                Category:
              </label>
              <select
                id="category"
                className="w-full p-2 border rounded"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="difficulty" className="block mb-2 font-semibold">
                Difficulty:
              </label>
              <select
                id="difficulty"
                className="w-full p-2 border rounded"
                value={selectedDifficulty}
                onChange={handleDifficultyChange}
              >
                <option value="">Select a difficulty</option>
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
            <Link
              href={`/quiz?category=${selectedCategory}&difficulty=${selectedDifficulty}`}
              passHref
            >
              <button
                className={`block w-full px-4 py-2 rounded-lg ${
                  selectedCategory && selectedDifficulty
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-400 text-gray-600 cursor-not-allowed"
                }`}
                disabled={!selectedCategory || !selectedDifficulty}
                onClick={handleStartNewQuiz}
              >
                Start Quiz
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectCategoryPage;
