import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  // console.log(video);
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;

  const videoId = ((typeof(video?.id)) == "object") ? video?.id?.videoId : video?.id
  console.log(video?.id?.kind == "youtube#playlist")
  return (
    <Link
      className="m-2"
      to={"/watch?v=" + videoId}
    >
      <div className="p-2 w-72 shadow-lg">
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnail"
        ></img>
        <h1 className="font-bold">{title}</h1>
        <h1 className="">{channelTitle}</h1>
        {/* <span>{statistics.viewCount} views</span> */}
      </div>
    </Link>
  );
};

export default VideoCard;
