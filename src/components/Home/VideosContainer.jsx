import React, { useEffect, useState } from 'react'
import { FETCH_URL, API_KEY } from '../../utils/constants/constants'
import VideoCard from '../Common/VideoCard'
import { Link } from 'react-router-dom'
import Shimmer from '../Common/Shimmer'

const VideosContainer = () => {
    const [videoList, setVideoList] = useState([])
    const[nextPageToken, setNextPageToken] = useState('')
    useEffect(()=>{
        getVideoData()
        document.addEventListener('scroll', HandleInfiniteScroll)
        return()=>{
                window.removeEventListener('scroll', HandleInfiniteScroll);
        }
    }, [])

    const HandleInfiniteScroll =()=>{
        if(document.documentElement.scrollHeight <= document.documentElement.scrollTop + window.innerHeight+1){
            getVideoData()
        }
    }

    async function getVideoData(){
        console.count("api call")
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key="+API_KEY+"&pageToken="+nextPageToken)
        const json = await data.json()
        console.log(json)
        setNextPageToken(json.nextPageToken)
        setVideoList((prevData) => [...prevData ,...json.items])
    }
    if(!videoList) return null
  return (
    <div className='flex flex-wrap pb-40 dark:bg-zinc-900 dark:text-white'>
        {videoList.length===0 && <Shimmer/>}
        {videoList.map((video, i)=>{
            return <VideoCard key={video?.id+""+i} video={video}/>
        })}
        <Shimmer/>
    </div>
  )
}

export default VideosContainer
