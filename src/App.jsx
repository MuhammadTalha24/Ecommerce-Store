import React, { useEffect } from 'react'
import { BrowserRouter as Router , Routes , Route, Navigate, useNavigate} from "react-router-dom"
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
import UpdateProduct from './pages/admin/pages/UpdateProduct'
import AddProduct from './pages/admin/pages/AddProduct'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

const App = () => {
  return (
     <Mystate>
       <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={
        <ProtectedRouteForAdmin>
          <Dashboard/>
        </ProtectedRouteForAdmin>
          } />
        <Route path='/order' element={
          <ProtectedRoute>
            <Order/>
          </ProtectedRoute>
        } />
        <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>} />
        <Route path='/products' element={<Prodcuts/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/productinfo/:id' element={<ProductInfo />}/>
        <Route path='/updateproduct/' element={
          <ProtectedRouteForAdmin>
            <UpdateProduct />
          </ProtectedRouteForAdmin>
        }/>
        <Route path='/addproduct' element={
          <ProtectedRouteForAdmin>
            <AddProduct />
          </ProtectedRouteForAdmin>
        }/>
        <Route path='/*' element={<Nopage/>} />
      </Routes>
      <ToastContainer/>
    </Router>
    </Mystate>

  )
}

export default App

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  const navigate = useNavigate()
  if(user){
    return children
  }else{
    useEffect(()=>{
      navigate('/login')
    },[])
  }
}
export const ProtectedRouteForAdmin = ({children}) => {
 const admin = JSON.parse(localStorage.getItem('user'))
  if(admin.user.email === 'talha@gmail.com' || admin.user.email === 'waqas@gmail.com'){
    return children
  }else{
    <Navigate  to={'/login'}/>
  }
}