import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  // console.log(video);
  const { snippet, id, statistics} = video;
  const { channelTitle, title, thumbnails } = snippet;

  const videoId = ((typeof(id)) == "object") ? id?.videoId : id
  const isPlaylist = id?.kind == "youtube#playlist"
  const playlistID = id?.playlistId;
  return (
    <Link
      className="m-2"
      to={ (isPlaylist) ? "/playlist?id="+playlistID :  "/watch?v=" + videoId }
    >
      <div className="p-2 w-80 shadow-lg">
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnail"
        ></img>
        {isPlaylist && <div className="-translate-y-8 p-1 top-10 bg-white opacity-85">Playlist</div> }
        <h1 className="font-bold">{title}</h1>
        <h1 className="">{channelTitle}</h1>
        {!isPlaylist && statistics?.viewCount && <span>{statistics?.viewCount} views</span>}
      </div>
    </Link>
  );
};

export default VideoCard;
