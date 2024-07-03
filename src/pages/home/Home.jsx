import React from 'react'
import Layout from '../../components/layout/Layout'
import Herosection from '../../components/herosection/Herosection'
import Featuredcollection from '../../components/featured/Featuredcollection'
import Testimonials from '../../components/testimonials/Testimonials'






const Home = () => {
   
  return (
    <Layout>
      <Herosection/>
      <Featuredcollection />
      <Testimonials />

    </Layout>
  )
}

export default Home