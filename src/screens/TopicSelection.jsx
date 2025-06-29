import { useNavigate } from "react-router-dom";
import { useState } from "react";
import questionsData from "./question";

export default function TopicSelection() {
  const navigate = useNavigate();

  const topics = ["HTML", "CSS", "JavaScript"];

  const handleTopicClick = (topic) => {
    
    localStorage.setItem("selectedTopic", topic);
    navigate("/config");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-50">
      <h2 className="text-3xl font-bold mb-8">Choose a Topic</h2>
      <div className="flex gap-6">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => handleTopicClick(topic)}
            className="bg-purple-600 text-white px-8 py-4 rounded-xl shadow hover:bg-purple-700"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
