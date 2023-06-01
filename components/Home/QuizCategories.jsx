import Link from "next/link";

const categories = [
  { id: 1, name: "Science", slug: "science" },
  { id: 2, name: "History", slug: "history" },
  { id: 3, name: "Sports", slug: "sports" },
  // Add more categories as needed
];

const QuizCategoriesSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Quiz Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">
                Explore quizzes in {category.name}
              </p>
              <Link
                href={`/quizzes/${category.slug}`}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                View Quizzes
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizCategoriesSection;
