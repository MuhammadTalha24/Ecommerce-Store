import React from 'react'
import Layout from '../../components/layout/Layout'
import Herosection from '../../components/herosection/Herosection'
import Featuredcollection from '../../components/featured/Featuredcollection'





const Home = () => {
   
  return (
    <Layout>
      <Herosection/>
      <Featuredcollection />

    </Layout>
  )
}

export default Home