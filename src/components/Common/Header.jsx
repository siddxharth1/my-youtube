import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/store/slices/appSlice";
import { Link } from "react-router-dom";
import { AUTO_SUGGEST_API } from "../../utils/constants/constants";
import store from "../../utils/store/store";
import { addInCache } from "../../utils/store/slices/searchSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleTheme } from "../../utils/store/slices/themeSlice";
import { FaUserCircle } from "react-icons/fa";
import {
  MdOutlineLightMode,
  MdOutlineSearch,
  MdOutlineDarkMode,
  MdOutlinePlayCircleFilled,
} from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState(""); //even state is const we can change bcz it is a new variable every time it re-render
  const [suggestions, setSuggestions] = useState();
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  //debounce
  useEffect(() => {
    //make an functon for api call after every key press
    //but if the difference between 2 key press is<200 decline that api call
    let timer;
    if (searchQuery !== "") {
      console.log(searchQuery);
      timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSuggestion();
        }
      }, 300);
    }

    //this return will run when the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  //return inside will be executed when the previous component destroy and the new component will be made with new useEffect call(and this happen when the useEffect dependency changes or reconcialiaton process happens)

  const toggleHamburgerHandler = () => {
    dispatch(toggleMenu());
  };

  const themeData = useSelector((store) => store.theme.isDarkTheme);
  useEffect(() => {
    if (themeData) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeData]);
  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  const getSearchSuggestion = async () => {
    const data = await fetch(AUTO_SUGGEST_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);

    setSuggestions(json[1]);
    dispatch(
      addInCache({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="flex px-7 sticky top-0 py-4 bg-white justify-between items-center shadow-lg dark:bg-zinc-900">
      <div className="flex h-8">
        <span className="mr-3 p-1 cursor-pointer rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700">
          <RxHamburgerMenu
            size={25}
            className="text-black dark:text-white "
            onClick={toggleHamburgerHandler}
          />
        </span>

        <Link to="/">
          <MdOutlinePlayCircleFilled aria-label="logo" size={35} color="red" />
        </Link>
      </div>
      <div className="relative">
        <div>
          <input
            className="p-2 px-5 bg-transparent rounded-l-full w-[30vw] max-w-96 border border-gray-700 outline-none dark:text-white "
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => {
              setTimeout(() => {
                setShowSuggestion(false);
              }, 200);
            }}
            onFocus={() => {
              setShowSuggestion(true);
            }}
          />
          <Link
            className="p-2 rounded-r-full px-4 bg-slate-300  border-2 border-gray-700"
            to={"/results?search_query=" + searchQuery}
          >
            🔍
          </Link>
        </div>

        {showSuggestion && suggestions && (
          <div className="absolute bg-white p-1 shadow-lg rounded-md border border-gray-300 dark:bg-zinc-900 dark:text-white w-96">
            <ul className="flex flex-col">
              {suggestions.map((item, i) => {
                return (
                  <Link
                    to={"/results?search_query=" + item}
                    key={item}
                    className="px-2 py-1 m-1 cursor-pointer dark:hover:bg-zinc-700 hover:bg-slate-200 rounded-md"
                  >
                    {item}
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <button
        className="mr-3 p-2 bg-slate-300 w-10 h-10 rounded-full transition-all"
        aria-label="Themechange"
        role="button"
        onClick={toggleThemeHandler}
      >
        {themeData ? (
          <MdOutlineLightMode aria-label="light-mode" size={24} />
        ) : (
          <MdOutlineDarkMode aria-label="dark-mode" size={24} />
        )}
      </button>
    </div>
  );
};

export default Header;
