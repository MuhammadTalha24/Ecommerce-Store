import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div className='main-content'>
        {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout