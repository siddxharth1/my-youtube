import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/store/slices/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { API_KEY } from "../../utils/constants/constants";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";
import VideoDescription from "./VideoDescription";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchpParams] = useSearchParams();
  const [videoData, setVideoData] = useState();
  const videoId = searchpParams.get("v");
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
          {(videoData?.items[0]?.snippet?.liveBroadcastContent === "live") && <Livechat />}
          <div>

          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default WatchPage;
