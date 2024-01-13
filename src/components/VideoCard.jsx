import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  // console.log(video);
  const { snippet, id} = video;
  const { channelTitle, title, thumbnails } = snippet;

  const videoId = ((typeof(id)) == "object") ? id?.videoId : id
  const isPlaylist = id?.kind == "youtube#playlist"
  const playlistID = id?.playlistId;
  return (
    <Link
      className="m-2"
      to={ (isPlaylist) ? "/playlist?id="+playlistID :  "/watch?v=" + videoId }
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
