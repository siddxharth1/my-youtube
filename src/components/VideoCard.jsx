import React from 'react'

const VideoCard = ({video}) => {
  console.log(video);
    const {snippet, statistics} = video
    const {channelTitle, title, thumbnails} = snippet
  return (
    <div className='p-2 w-72 shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail'></img>
        <h1 className='font-bold'>{title}</h1>
        <h1 className=''>{channelTitle}</h1>
        <span>{statistics.viewCount} views</span>
    </div>
  )
}

export default VideoCard