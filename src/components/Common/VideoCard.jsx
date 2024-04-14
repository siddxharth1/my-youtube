import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  // console.log(video);
  const { snippet, id, statistics, kind } = video;
  const { channelTitle, title, thumbnails } = snippet;
  let videoId;

  const isPlaylist = id?.kind == "youtube#playlist";
  const playlistID = id?.playlistId;

  switch (kind) {
    case "youtube#video":
      videoId = videoId ? videoId : id;
      break;
    case "youtube#playlistItem":
      videoId = snippet.resourceId.videoId;
      break;
    case "youtube#searchResult":
      videoId = id.videoId;
      break;
  }

  return (
    <Link
      className="m-2"
      to={isPlaylist ? "/playlist?id=" + playlistID : "/watch?v=" + videoId}
    >
      <div className="p-2 w-80 shadow-lg">
        <img
          className="rounded-lg"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        ></img>
        {isPlaylist && (
          <div className="-translate-y-8 p-1 top-10 bg-white opacity-85 dark:text-black font-semibold">
            Playlist
          </div>
        )}
        <h1 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h1>
        <h1 className="">{channelTitle}</h1>
        {!isPlaylist && statistics?.viewCount && (
          <span>{Number(statistics?.viewCount).toLocaleString()} views</span>
        )}
      </div>
    </Link>
  );
};

export default VideoCard;
