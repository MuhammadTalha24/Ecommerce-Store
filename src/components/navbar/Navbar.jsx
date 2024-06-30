import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-primary py-1 d-flex justify-content-center text-white'>
      <span className='fw-regular fs-6 mb-0 py-2'>Sign up and Get 20% off on your first order</span>
    </div>
    <nav className="navbar sticky-top border-bottom border-5 border-primary navbar-expand-lg py-3 bg-white navbar-expand-lg bg-body-white">
  <div className="container">
    <a className="navbar-brand fs-4 fw-bolder" href="#">ItsWears</a>
   <button className="navbar-toggler order-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse order-3" id="navbarSupportedContent">
      <ul className="navbar-nav align-items-md-center ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link fw-medium text-decoration-none' to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link fw-medium text-decoration-none' to={'/products'}>All Products</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link fw-medium text-decoration-none' to={'/order'}>Orders</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link fw-medium text-decoration-none' to={'/dashboard'}>Admin</Link>
        </li>
        <li className="nav-item">
        <a className='nav-link fw-medium text-decoration-none' href='#'>Log Out</a>
        </li>
        <li className='nav-item'>
          <Link className='nav-link ' to={'/cart'}>
          <span className='d-flex align-items-center'>
          <span className='me-2 fw-medium'>Cart</span>
          <i className="fs-3 bi bi-cart3 position-relative">
         <span style={{fontSize:'12px'}} className="position-absolute mt-2 top-0 start-100 translate-middle badge rounded-pill bg-danger">
          2
        </span>
         </i>
          </span>
          </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar