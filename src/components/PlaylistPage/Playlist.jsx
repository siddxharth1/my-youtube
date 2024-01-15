import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../../utils/constants/constants";
import VideoCard from "../Common/VideoCard";

const Playlist = () => {
  const [paramsData] = useSearchParams();
  const playlistId = paramsData.get("id");
  const [playlistDetail, setPlaylistDetail] = useState([]);
  const [videoData, setVideoData] = useState([]);
  console.log(playlistId);

  useEffect(() => {
    getPlaylistDetail();
    getPlaylistData();
  }, []);
  const getPlaylistDetail = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${API_KEY}`
    );
    const json = await data.json();
    console.log(json);
    setPlaylistDetail(json.items[0].snippet);
  };
  const getPlaylistData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`
    );
    const json = await data.json();
    setVideoData(json.items);
  };

  return (
    <div className="flex flex-col p-5 dark:bg-zinc-900 dark:text-white">
      <div className="">
        <h1 className="font-bold text-4xl">{playlistDetail.channelTitle}</h1>
        <p className="text-gray-600">{playlistDetail.description}</p>
      </div>
      <div className="grid grid-cols-3 px-10">
        {videoData.length > 0 &&
          videoData.map((item) => {
            return <VideoCard key={item.id} video={item} />;
          })}
      </div>
    </div>
  );
};

export default Playlist;
