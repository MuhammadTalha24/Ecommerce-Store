import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import { myContext } from '../../context/data/Mycontext'

const Home = () => {
   const context = useContext(myContext)
   console.log(context)
   const {name,rollno} = context
  return (
    <Layout>
        <h1>Name:{name}</h1> 
        <h1>Roll No:{rollno}</h1> 
    </Layout>
  )
}

export default Home