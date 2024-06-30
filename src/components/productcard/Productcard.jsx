import React from 'react'
import { Link } from 'react-router-dom'

const Productcard = () => {
  return (
    <>
<div className="card border-0 rounded-0 mx-3">
  <img style={{height:"260px"}}  src="https://stylegirlfriend.com/wp-content/uploads/2022/04/city-casual-date-outfit.jpg" className="card-img-top rounded-0" alt="..." />
  <div className="card-body">
    <div className="d-flex align-items-center justify-content-between">
    <h5 className="card-title">Card title</h5>
    <span className='d-flex align-items-center mb-2'><i class="bi bi-star-fill text-warning me-1"></i><span className='fw-bold'>4.5</span></span>
    </div>
    <h6>Rs. 1,599</h6>
    <Link href="#" className="btn btn-outline-primary mt-2">View Product</Link>
  </div>
</div>
    </>
  )
}

export default Productcard