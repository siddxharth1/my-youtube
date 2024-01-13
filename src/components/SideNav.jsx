import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdHistory,
  MdOutlineVideoLibrary,
  MdWatchLater,
} from "react-icons/md";
import { GoVideo } from "react-icons/go";

import { SiYoutubeshorts } from "react-icons/si";

const SideNav = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className=" shadow-xl p-3 text-black dark:text-white dark:bg-zinc-900">
      <ul>
        <Link to="/" className="flex gap-2 p-2 hover:bg-gray-300 rounded-lg">
          <MdHomeFilled size={20} />
          {isMenuOpen && <span>Home</span>}
        </Link>
        <Link
          to="results?search_query=shots"
          className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg"
        >
          <SiYoutubeshorts size={20} />
          {isMenuOpen && <span>Shorts</span>}
        </Link>
        <Link className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg">
          <MdSubscriptions size={20} />
          {isMenuOpen && <span>Subscriptions</span>}
        </Link>
      </ul>
      <hr className="border-1 border-gray-500 my-3" />
      <ul>
        <Link className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg">
          <MdOutlineVideoLibrary size={20} />
          {isMenuOpen && <span>Library</span>}
        </Link>
        <Link className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg">
          <MdHistory size={20} />
          {isMenuOpen && <span>History</span>}
        </Link>
        <Link className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg">
          <GoVideo size={20} />
          {isMenuOpen && <span>Your Video</span>}
        </Link>
        <Link className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg">
          <MdWatchLater size={20} />
          {isMenuOpen && <span>Watch Later </span>}
        </Link>
      </ul>
      {isMenuOpen && (
        <>
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
        </>
      )}
    </div>
  );
};

export default SideNav;
