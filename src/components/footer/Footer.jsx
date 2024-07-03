import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    
<div className="container-fluid overflow-x-hidden bg-secondary">
  <footer className="py-5 container">
    <div className="row">
      <div className="col-md-4">
        
          <Link to={'/'} className='text-decoration-none'><h3>ItsWears</h3></Link>
          <p>Monthly digest of whats new and exciting from us.Monthly digest of whats new and exciting from us.</p>
          <a href="#" ><i class="fs-2 bi bi-instagram"></i></a>
          <a href="#" ><i class="fs-2 mx-3 bi bi-facebook"></i></a>
          <a href="#" ><i class="fs-2 bi bi-twitter"></i></a>
      
      </div>

      <div className="col-md-2 mt-3 mt-md-0 offset-0 offset-md-2">
        <h5>Menu</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-md-2 mt-3 mt-md-0 ">
        <h5>Services</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-md-2 mt-3 mt-md-0 ">
        <h5>Other</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

    </div>

    <div className="d-flex justify-content-center py-4 my-4 border-top">
      <p>&copy; {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
    </div>
  </footer>
</div>

    </>
  )
}

export default Footer