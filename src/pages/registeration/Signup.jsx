import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='login-wrapper'>
    <div className="container">
        <h1 className='text-center mb-4 text-black'>InfinityWears</h1>
    <div className="row justify-content-center">
        <div className="col-md-4">
            <div className="card py-4 rounded-3 bg-black text-white">
                <div className="card-body text-center">
                     <h4 className='mb-4'>Signup</h4>
                     <input type="email"  className='form-control mb-3 p-2' placeholder='example@gmail.com' />
                     <input type="password" className='form-control mb-3 p-2' placeholder='●●●●●●●●●' />
                     <button className='btn btn-info w-100 mb-3'>Signup</button>
                     <span >Do you already have an account?<Link  className='text-decoration-none ms-1 text-white fw-bold' to={'/login'}>Login</Link></span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Signup