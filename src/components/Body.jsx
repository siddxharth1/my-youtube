import React from 'react'
import SideNav from './/Common/SideNav'
import { Outlet } from 'react-router-dom'
import Header from './Common/Header'

const Body = () => {

  return (
    <>
    <Header/>
    <div className='flex dark:bg-zinc-900'>
      <SideNav/>
      <Outlet/>
    </div>
    </>
  )
}

export default Body
