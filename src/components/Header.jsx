import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { AUTO_SUGGEST_API } from "../utils/constants";
import store from "./../utils/store";
import { addInCache } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHamburgerHandler = () => {
    dispatch(toggleMenu());
  };

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
    <div className="flex px-7 py-4 justify-between items-center shadow-lg">
      <div className="flex h-8">
        <img
          className=" mr-3 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/128px-Hamburger_icon.svg.png"
          alt=""
          onClick={toggleHamburgerHandler}
        />

        <Link to="/">
          <img className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/128px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="relative">
        <div>
          <input
            className="p-2 px-5 rounded-l-full w-96 border border-gray-700 outline-none"
            type="text"
            name=""
            id=""
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => {
              setTimeout(() => {
                setShowSuggestion(false)
              }, 200);
            }}
            onFocus={() => {
              setShowSuggestion(true);
            }}
          />
          <Link className="p-2 rounded-r-full px-4 bg-slate-300 border border-gray-700" to={"/results?search_query="+searchQuery}>
            🔍
          </Link>
        </div>

        {showSuggestion && suggestions && (
          <div className="absolute bg-white p-1 shadow-lg rounded-md border border-gray-300 w-96">
            <ul className="flex flex-col">
              {suggestions.map((item, i) => {
                return (
                  <Link 
                    to={"/results?search_query="+item}
                    className="px-2 py-1 m-1 cursor-pointer hover:bg-slate-200 rounded-md"
                  >
                    {item}
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <button>
        <img
          className="h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default Header;
