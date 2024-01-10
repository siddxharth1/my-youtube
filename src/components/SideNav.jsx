import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const SideNav = () => {
  const isMenuOpen = useSelector(store=> store.app.isMenuOpen)

  if(!isMenuOpen) return null
  return (
    <div className=" shadow-xl p-3 "> 
      <ul>
        <Link to="/"><li className="p-2 hover:bg-gray-300 rounded-lg">Home</li></Link>
        
        <li className="p-2 hover:bg-gray-300 rounded-lg">Shorts</li>
        <li className="p-2 hover:bg-gray-300 rounded-lg">Subscriptions</li>
      </ul>
      <hr className="border-1 border-gray-500 my-3" />
      <ul>
        <li className="p-2 hover:bg-gray-300 rounded-lg">Library </li>
        <li className="p-2 hover:bg-gray-300 rounded-lg">Your Video</li>
        <li className="p-2 hover:bg-gray-300 rounded-lg">History</li>
        <li className="p-2 hover:bg-gray-300 rounded-lg">Watch Later</li>
      </ul>
      <hr className="border-1 border-gray-500 my-3" />
      <ul>
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li className="p-2 hover:bg-gray-300 rounded-lg">Name1</li>
          <li className="p-2 hover:bg-gray-300 rounded-lg">Name2</li>
          <li className="p-2 hover:bg-gray-300 rounded-lg">Name3</li>
          <li className="p-2 hover:bg-gray-300 rounded-lg">Name4</li>
        </ul>
      </ul>
    </div>
  );
};

export default SideNav;
