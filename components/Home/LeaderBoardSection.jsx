import React from "react";

const LeaderBoardSection = () => {
  return (
    <section className="mx-auto py-12 max-w-6xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Leaderboard</h2>
        <div className="flex flex-col">
          {/* Leaderboard Item 1 */}
          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <p className="ml-4">John Doe</p>
            </div>
            <p>Score: 5000</p>
          </div>

          {/* Leaderboard Item 2 */}
          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <p className="ml-4">Jane Smith</p>
            </div>
            <p>Score: 4800</p>
          </div>

          {/* Leaderboard Item 3 */}
          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <p className="ml-4">Alex Johnson</p>
            </div>
            <p>Score: 4500</p>
          </div>

          {/* Add more leaderboard items as needed */}

          {/* View All Button */}
          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderBoardSection;
