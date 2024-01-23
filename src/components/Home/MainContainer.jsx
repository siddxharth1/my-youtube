import React from 'react'
import VideosContainer from './VideosContainer'
import Suggest from './Suggest'

const MainContainer = () => {
  return (
    <div className='inline'>
      <Suggest/>
        <VideosContainer/>
    </div>
  )
}

export default MainContainer
