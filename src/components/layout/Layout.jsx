import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import StaticCardSection from '../StaticCardSection'
import StaticCardFooter from '../StaticCardFooter'
const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <main>
        {children}
    </main>
    <StaticCardFooter />
    <Footer/>
    </>
  )
}

export default Layout