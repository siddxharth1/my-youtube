import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchpParams] = useSearchParams();
  const [videoData, setVideoData] = useState();
  const [showMore, setShowMore] = useState(true)
  const videoId = searchpParams.get("v");

  useEffect(() => {
    getVideoData();
    dispatch(closeMenu());
  }, []);
  const getVideoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=` +
        API_KEY
    );
    const json = await data.json();
    console.log(json);
    setVideoData(json);
  };

  return (
    <div className="m-4">
      <iframe
        width="928"
        height="522"
        src={"https://www.youtube.com/embed/" + videoId}
        title="The PropheC | Behzubaan | Full Audio | Midnight Paradise"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <br />
      <h1 className="font-bold text-xl">
        {videoData?.items[0]?.snippet?.localized?.title}
      </h1>
      <div className="flex justify-between w-11/12">
        <h1>
          View:{" "}
          {Number(videoData?.items[0]?.statistics?.viewCount).toLocaleString()}
        </h1>
        <h1>
          Likes:{" "}
          {Number(videoData?.items[0]?.statistics?.likeCount).toLocaleString()}
        </h1>
      </div>
      <div className="relative">
        {showMore ? <button className={"absolute right-0 bottom-0 text-gray-500 mr-12 px-2 py-1 bg-slate-200 hover:text-black"} onClick={()=>setShowMore(false)}>show more..</button>: <button className={"absolute bottom-0 text-gray-500 ml-3 px-2 py-1 bg-slate-200 hover:text-black"} onClick={()=>setShowMore(true)}>show less</button>}
        
        <p className={`w-[928px] my-3 px-5 p-1 rounded-lg bg-slate-200 ${(showMore)? ` overflow-hidden line-clamp-2` : `pb-7`}  `}>
          {videoData?.items[0]?.snippet?.localized?.description}
        </p>
      </div>
      <h1 className="font-semibold text-xl text-number">
        {Number(
          videoData?.items[0]?.statistics?.commentCount
        )?.toLocaleString()}{" "}
        Comment
      </h1>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
