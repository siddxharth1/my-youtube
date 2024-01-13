import React, { useEffect, useState } from "react";
import {  useSearchParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import VideoCard from './VideoCard';

const SearchResult = () => {
    const[searchItemVideo, setSearchItemVideo] = useState([]);
    const [searchpParams] = useSearchParams();
    const searchQuery = searchpParams.get("search_query");

    useEffect(()=>{
        getSearchedData()
    }, [searchQuery])

    const getSearchedData = async()=>{
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=`+API_KEY)
        const json = await data.json()
        console.log(json.items);
        setSearchItemVideo(json.items);
    }
    if(searchItemVideo.length === 0) return ;

  return <div className="flex flex-wrap">
    {searchItemVideo.length>0 && searchItemVideo.map((item, i)=>{
        return <VideoCard key={item.id+i} video={item}/>
    }) }
  </div>;
};

export default SearchResult;
