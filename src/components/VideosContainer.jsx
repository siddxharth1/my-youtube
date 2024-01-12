import React, { useEffect, useState } from 'react'
import { FETCH_URL, API_KEY } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

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
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY+"&pageToken="+nextPageToken)
        const json = await data.json()
        console.log(json)
        setVideoList((prevData) => [...prevData ,...json.items])
        setNextPageToken(json.nextPageToken)
    }
    if(!videoList) return null
  return (
    <div className='flex flex-wrap'>
        {videoList.map((video)=>{
            return <Link className='m-2'  to={"/watch?v="+ video.id}> <VideoCard video={video}/></Link>
        })}
    </div>
  )
}

export default VideosContainer
