import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Layouts/Footer'
import Header from '../../Layouts/Header'

const LayoutWrapper = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutWrapper
