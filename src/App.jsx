import React from 'react'
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './pages/home/Home'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Nopage from './pages/nopage/NoPage'
import { Mystate } from './context/data/Mystate'
import Prodcuts from './pages/allproducts/Prodcuts'
import Login from './pages/registeration/Login'
import Signup from './pages/registeration/Signup'
import ProductInfo from './pages/productinfo/ProductInfo'

const App = () => {
  return (
     <Mystate>
       <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/products' element={<Prodcuts/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/productinfo/:id' element={<ProductInfo />}/>
        <Route path='/*' element={<Nopage/>} />
      </Routes>
    </Router>
    </Mystate>

  )
}

export default App