import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='p-6'>
      <div className='container-fluid pb-4 px-0 border-bottom'>
      <div className='container'> 
      <Link className="text-decoration-none text-black fs-6" to={'/'}><i class="bi bi-caret-left me-3"></i>Home Page</Link>
      <h3 className='fw-bold mt-4'>Shopping Cart (3)</h3>
      </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
              <div className='card'>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img className='img-fluid' src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/06032024/809_1709542580_65e58cb45cb96_electric-blue-tie-and-dye-t-shirtt-shirtsmendeez-pk-0012080-590307-723528297501.jpg" alt="" />
                    </div>
                    <div className="col-md-8">
                    <h2 className='fs-4'>Electric Blue Tie And Dye T-Shirt</h2>
                    <h4 className='fs-5'>Rs 2,799</h4>
                    <div className="d-flex align-items-center">
                    <div className="d-flex flex-column">
                    <label htmlFor="">Size</label>
                    <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="">Quantity</label>
                    <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col-md-4">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart