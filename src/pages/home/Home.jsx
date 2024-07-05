import React from 'react'
import Layout from '../../components/layout/Layout'
import Herosection from '../../components/herosection/Herosection'
import Featuredcollection from '../../components/featured/Featuredcollection'
import Testimonials from '../../components/testimonials/Testimonials'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'







const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
   
  return (
    <Layout>
      <Herosection/>
      <Featuredcollection />
      <Testimonials />

    </Layout>
  )
}

export default Home