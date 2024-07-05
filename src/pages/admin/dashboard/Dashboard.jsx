import React from 'react'
import DashboardsTabs from './DashboardsTabs'


const Dashboard = () => {
  return (

    <>
    <div className="container p-6">
      <div className="row">
        <div className="col-md-12">
          <h3 className='text-center'>Admin Pannel</h3>
          <div className="row mt-5">
            <div className="col-md-4">
            <div className="card bg-secondary">
            <div className="card-body text-center">
            <i className="bi bi-person-fill display-1"></i>
              <h5 className="card-title">Total Users</h5>
              <h5 className="card-title">3</h5>
            </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card bg-secondary">
            <div className="card-body text-center">
            <i className="bi bi-box-seam display-1"></i>
              <h5 className="card-title">Total Products</h5>
              <h5 className="card-title">3</h5>
            </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card bg-secondary">
            <div className="card-body text-center">
            <i className="bi bi-cart-check display-1"></i>
              <h5 className="card-title">Total Orders</h5>
              <h5 className="card-title">3</h5>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DashboardsTabs />
    </>
  )
}

export default Dashboard