import React, { useEffect, useState } from 'react'
import { FETCH_URL } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideosContainer = () => {
    const [videoList, setVideoList] = useState(null)
    useEffect(()=>{
        getVideoData()
    }, [])

    async function getVideoData(){
        const data = await fetch(FETCH_URL)
        const json = await data.json()
        // console.log(json)
        setVideoList(json.items)
    }
    if(!videoList) return null
  return (
    <div className='flex flex-wrap'>
        {videoList.map((video)=>{
            return <Link className='m-2' key={video.id} to={"/watch?v="+ video.id}> <VideoCard video={video}/></Link>
        })}
    </div>
  )
}

export default VideosContainer
