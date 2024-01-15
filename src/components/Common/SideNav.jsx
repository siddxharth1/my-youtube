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
      <div>
        <Link to="/" className="flex gap-2 p-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700">
          <MdHomeFilled size={20} />
          {isMenuOpen && <span>Home</span>}
        </Link>
        <Link
          to="results?search_query=shots"
          className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700"
        >
          <SiYoutubeshorts size={20} />
          {isMenuOpen && <span>Shorts</span>}
        </Link>
        <Link className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700">
          <MdSubscriptions size={20} />
          {isMenuOpen && <span>Subscriptions</span>}
        </Link>
      </div>
      <hr className="border-1 border-gray-500 my-3" />
      <div>
        <Link className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700">
          <MdOutlineVideoLibrary size={20} />
          {isMenuOpen && <span>Library</span>}
        </Link>
        <Link className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700">
          <MdHistory size={20} />
          {isMenuOpen && <span>History</span>}
        </Link>
        <Link className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700">
          <GoVideo size={20} />
          {isMenuOpen && <span>Your Video</span>}
        </Link>
        <Link className="flex p-2 gap-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700">
          <MdWatchLater size={20} />
          {isMenuOpen && <span>Watch Later </span>}
        </Link>
      </div>
      {isMenuOpen && (
        <>
          <hr className="border-1 border-gray-500 my-3" />
            <h1 className="font-bold">Subscriptions</h1>
            <ul>
              <li className="p-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700">Name1</li>
              <li className="p-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700">Name2</li>
              <li className="p-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700">Name3</li>
              <li className="p-2 hover:bg-gray-300 rounded-lg dark:hover:bg-zinc-700">Name4</li>
            </ul>
        </>
      )}
    </div>
  );
};

export default SideNav;
