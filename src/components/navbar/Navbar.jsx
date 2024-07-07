import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'))
 const logout = () =>{
    localStorage.clear('user')
    window.location.href = '/login'
 }
 const cartitItems = useSelector((state)=>state.cart)
  return (
    <>
    <div className='bg-primary py-1 d-flex justify-content-end '>
     <a className='fw-regular me-5 fs-6 mb-0 text-white py-2 text-decoration-none' href="tel:03008032235">Helpline: 03008032235</a>
    </div>
    <nav className="navbar sticky-top border-bottom border-5 border-primary navbar-expand-lg py-3 bg-white navbar-expand-lg bg-body-white">
  <div className="container">
    <Link to={'/'} className="navbar-brand fs-4 fw-bolder" href="#">Infinitywears</Link>
   <button className="navbar-toggler order-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse order-3" id="navbarSupportedContent">
      <ul className="navbar-nav align-items-md-center mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link fw-medium text-decoration-none' to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link fw-medium text-decoration-none' to={'/products'}>All Products</Link>
        </li>
        {user?.user?.email === 'talha@gmail.com' || user?.user?.email === 'waqas@gmail.com' ?   '' : <li className="nav-item">
        <Link className='nav-link fw-medium text-decoration-none' to={'/order'}>Orders</Link>
        </li>  }
        {user?.user?.email === 'talha@gmail.com' || user?.user?.email === 'waqas@gmail.com' ?  <li className="nav-item">
        <Link className='nav-link fw-medium text-decoration-none' to={'/dashboard'}>Admin</Link>
        </li> : '' }

       {user?.user?.email === 'talha@gmail.com' || user?.user?.email === 'waqas@gmail.com' ? '' :  <li className='nav-item'>
          <Link className='nav-link ' to={'/cart'}>
          <span className='d-flex align-items-center'>
          <span className='me-2 fw-medium'>Cart</span>
          <i className="fs-3 bi bi-cart3 position-relative">
         <span style={{fontSize:'12px'}} className="position-absolute mt-2 top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartitItems.length}
        </span>
         </i>
          </span>
          </Link>
        </li> }
      
       

      </ul>
      <ul className='list-unstyled d-flex flex-column align-items-start gap-md-2 flex-md-row align-items-md-center mb-0'>
        
        {user ? <li className="nav-item">
        <a onClick={logout} className='btn btn-dark' href='#'><i class="bi bi-box-arrow-left me-2"></i>Log Out</a>
        </li> :<li className="nav-item">
        <Link to={'/login'} className='btn btn-dark' href='#'><i class="bi bi-box-arrow-in-right me-2"></i>Login</Link>
        </li> }

        <li className="nav-item">
        <Link to={'/signup'} className='btn btn-primary'>Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar