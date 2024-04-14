import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/store/slices/appSlice";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { API_KEY, AUTO_SUGGEST_API } from "../../utils/constants/constants";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";
import VideoDescription from "./VideoDescription";
import VideoCard from "./../Common/VideoCard";

const WatchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchpParams = new URLSearchParams(location.search);
  const videoId = searchpParams.get("v");
  const [videoData, setVideoData] = useState();
  const [suggestVideo, setSuggestVideo] = useState([]);
  console.log(videoId);

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
    getSuggestVideo(json.items[0].snippet.localized.title);
  };

  const getSuggestVideo = async (title) => {
    console.log(title);
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=${API_KEY}&q=${title}`
    );
    const json = await data.json();
    setSuggestVideo([...json.items]);
    console.log(json.items);
  };

  return (
    <div className="p-3 w-full dark:bg-zinc-900 dark:text-white">
      <div className="flex gap-2 w-full">
        <div>
          <iframe
            width="928"
            height="522"
            src={"https://www.youtube.com/embed/" + videoId}
            allowFullScreen
          ></iframe>
          <div>
            <h1 className="font-bold text-xl">
              {videoData?.items[0]?.snippet?.localized?.title}
            </h1>
            <div className="flex justify-between my-4 w-11/12">
              <div>
                {/* <img src={`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData?.items[0]?.snippet?.channelId}&key=${API_KEY}`} alt="" /> */}
                <h1 className="font-bold">
                  {videoData?.items[0]?.snippet?.channelTitle}
                </h1>
              </div>
              <div className="flex gap-4">
                <h1>
                  View:{" "}
                  {Number(
                    videoData?.items[0]?.statistics?.viewCount
                  ).toLocaleString()}
                </h1>
                <h1>
                  Likes:{" "}
                  {Number(
                    videoData?.items[0]?.statistics?.likeCount
                  ).toLocaleString()}
                </h1>
              </div>
            </div>
          </div>

          <VideoDescription
            desc={videoData?.items[0]?.snippet?.localized?.description}
          />

          <h1 className="font-semibold text-xl text-number">
            {Number(
              videoData?.items[0]?.statistics?.commentCount
            )?.toLocaleString()}{" "}
            Comment
          </h1>
          <CommentsContainer />
        </div>

        <div className="w-full">
          {videoData?.items[0]?.snippet?.liveBroadcastContent === "live" && (
            <Livechat />
          )}
          <div className="w-96 flex flex-col ">
            {suggestVideo.length > 0 &&
              suggestVideo.slice(1).map((item) => {
                return <VideoCard video={item} />;
              })}
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default WatchPage;
