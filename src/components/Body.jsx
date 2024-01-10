import React from 'react'
import SideNav from './SideNav'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {

  return (
    <div className='flex'>
      <SideNav/>
      <Outlet/>
    </div>
  )
}

export default Body
