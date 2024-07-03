import React from 'react'

const Testimonials = () => {
  return (

  <>
    <div class="container py-5">
   <div className="mb-4 d-flex flex-column">
   <h2 className="text-primary">Testimonials</h2>
   <h4>What our customers are saying</h4>
   </div>
  <div class="row">
    <div class="col-md-4">
      <div class="card bg-white shadow border border-1 rounded-4">
        <div class="card-body">
            <div className="d-flex align-items-center gap-1">
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            </div>
            <p className='border-bottom pb-4 mt-3 fs-5'><i class="bi bi-quote"></i> Absolutely fantastic experience! The product quality exceeded my expectations, and the customer service was top-notch. Shipping was fast, and the item arrived well-packaged. Highly recommend!<i class="bi end-icon bi-quote"></i></p>
            <div className="d-flex mt-2 gap-3 align-items-center">
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:'60px' , height:'60px'}} className='rounded-circle' alt="" />
            <h4 class="card-title fs-5 ">Maham</h4>
            </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card bg-white shadow border border-1 rounded-4">
        <div class="card-body">
            <div className="d-flex align-items-center gap-1">
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            </div>
            <p className='border-bottom pb-4 mt-3 fs-5'><i class="bi bi-quote"></i> Absolutely fantastic experience! The product quality exceeded my expectations, and the customer service was top-notch. Shipping was fast, and the item arrived well-packaged. Highly recommend!<i class="bi end-icon bi-quote"></i></p>
            <div className="d-flex mt-2 gap-3 align-items-center">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width:'60px' , height:'60px'}} className='rounded-circle' alt="" />
            <h4 class="card-title fs-5 ">Ahmed</h4>
            </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card bg-white shadow border border-1 rounded-4">
        <div class="card-body">
            <div className="d-flex align-items-center gap-1">
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            <i className='bi bi-star-fill text-dark'></i>
            </div>
            <p className='border-bottom pb-4 mt-3 fs-5'><i class="bi bi-quote"></i>I am so impressed with the variety and quality of products available. The website is easy to navigate, and the checkout process is smooth. I received my order promptly, and everything was just as described.<i class="bi end-icon bi-quote"></i></p>
            <div className="d-flex mt-2 gap-3 align-items-center">
            <img src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width:'60px' , height:'60px'}} className='rounded-circle' alt="" />
            <h4 class="card-title fs-5 ">Abdullah</h4>
            </div>
        </div>
      </div>
    </div>
</div>
</div>
  
  </>
  )
}

export default Testimonials