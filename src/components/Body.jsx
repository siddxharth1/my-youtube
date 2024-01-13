import React from 'react'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {

  return (
    <>
    <Header/>
    <div className='flex'>
      <SideNav/>
      <Outlet/>
    </div>
    </>
  )
}

export default Body
