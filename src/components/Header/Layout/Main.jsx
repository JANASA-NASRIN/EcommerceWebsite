import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import { Outlet } from 'react-router-dom'  // ✅ correct import

const Main = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>   {/* child routes render here */}
      <Footer/>
    </div>
  )
}

export default Main
