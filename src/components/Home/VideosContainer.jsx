import React, { useEffect, useState } from "react";
import { FETCH_URL, API_KEY } from "../../utils/constants/constants";
import VideoCard from "../Common/VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "../Common/Shimmer";

const VideosContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getVideoData();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", HandleInfiniteScroll, true);
    return () => {
      document.removeEventListener("scroll", HandleInfiniteScroll, true);
    };
  }, [nextPageToken]);

  const HandleInfiniteScroll = () => {
    if (
      window.innerHeight + Math.round(document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight - 1
    ) {
        setLoading(true)
      getVideoData();
    }
  };

  const getVideoData = async () => {
    
    try {
      const url = nextPageToken !== "" ? FETCH_URL + "&pageToken=" + nextPageToken : FETCH_URL;
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);
      setNextPageToken(json.nextPageToken);
      setVideoList([...videoList, ...json?.items]);
    } catch (e) {
      console.log(e);
    }
    finally{
        setLoading(false)
    }
  };
  if(!videoList.length) return <div className="flex"><Shimmer /></div> 
  return (
    <div className="flex flex-wrap pb-40 dark:bg-zinc-900 dark:text-white">
      {videoList.map((video) => {
        return <VideoCard key={video?.id} video={video} />;
      })}
      {loading && <Shimmer/>}
    </div>
  );
};

export default VideosContainer;
