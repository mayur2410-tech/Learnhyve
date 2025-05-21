import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import { div } from "framer-motion/client";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return;
  
    try {
      const res = await fetch(`http://localhost:3000/api/skills/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
  
      if (data.success) {
        navigate(data.redirectUrl);
        console.log(data.redirectUrl) // Redirect to the skill page
      } else {
        alert("Skill not found!");
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  

  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 mt-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find  Skills
          </h1>
          <p className="text-xl text-gray-600">
            Discover workshops that will change your life
          </p>
        </div>
        
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <div className="w-full flex flex-col md:flex-row gap-2 mb-8">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Skills..."
              className="flex-1 px-6 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-400 focus:outline-none transition-colors"
            />
            <button 
              onClick={handleSearch} 
              className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Search
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-600 font-medium">Popular:</span>
            <button 
              onClick={() => setQuery("Communication Skill")}
              className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-full border border-gray-200 transition-colors"
            >
             Communication Skills
            </button>
            <button 
              onClick={() => setQuery("Money Management skill")}
              className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-full border border-gray-200 transition-colors"
            >
              Money-Management Skills
            </button>
            {/* <button 
              onClick={() => setQuery("trending-skill")}
              className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-full border border-gray-200 transition-colors"
            >
              Trending Skill
            </button> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
