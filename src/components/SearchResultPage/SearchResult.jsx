import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../../utils/constants/constants";
import VideoCard from "../Common/VideoCard";
import Shimmer from "../Common/Shimmer";

const SearchResult = () => {
  const [searchItemVideo, setSearchItemVideo] = useState([]);
  const [searchpParams] = useSearchParams();
  const searchQuery = searchpParams.get("search_query");

  useEffect(() => {
    getSearchedData();
  }, [searchQuery]);

  const getSearchedData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${API_KEY}&q=${searchQuery}`
    );
    const json = await data.json();
    console.log(json.items);
    setSearchItemVideo(json.items);
  };
  if (!searchItemVideo) return;

  return (
    <div className="flex flex-wrap dark:bg-zinc-900 dark:text-white">
      {searchItemVideo.length === 0 && <Shimmer />}
      {searchItemVideo.length > 0 &&
        searchItemVideo.map((item, i) => {
          return <VideoCard key={item.id + i} video={item} />;
        })}
    </div>
  );
};

export default SearchResult;
