import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Funny",
  "Music",
  "Sports",
  "Movies",
  "Science",
  "Technology",
  "Travel",
  "Education",
  "Cooking",
  "Fashion",
  "Gaming",
  "News",
  "Health",
  "Art",
  "Literature",
  "Business",
  "DIY",
  "Lifestyle",
  "Animals",
  "Nature",
];

const Suggest = () => {
  return (
    <div className="w-[78vw]  py-2 overflow-x-auto">
      <ul className="flex gap-1 w-full">
        {categories.map((category, index) => (
          <li
            key={index}
            className="bg-zinc-700 text-white hover:bg-zinc-600 m-1 px-2 py-1 rounded-md"
          >
            <Link to={`/results?search_query=${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggest;
