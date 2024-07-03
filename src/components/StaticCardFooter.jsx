import React from 'react'
import img from "../assets/t-shirt.png"
import secondimg from "../assets/distribution.png"
import thirdimg from "../assets/fast-delivery.png"


const StaticCardFooter = () => {
  return (
    <div className="container-fluid py-4 bg-primary">
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                    <div className="col-md-12">
                       <div className='row align-items-center justify-content-between'>
                           <div className="col-md-4 col-3">
                           <div className="d-flex flex-column align-items-center">
                                <span className='text-white text-center mb-2'>100% Premium Clothes</span>
                                <span className='bg-white icon-container'> <img className='icons' src={img} alt="" /> </span>
                            </div>
                           </div>
                           <div className="col-md-4 col-3">
                           <div className="d-flex flex-column align-items-center">
                                <span className='text-white text-center mb-2'>Easy Returns</span>
                                <span className='bg-white icon-container'> <img className='icons' src={secondimg} alt="" /> </span>
                            </div>
                           </div>
                           <div className="col-md-4 col-3">
                           <div className="d-flex flex-column align-items-center">
                                <span className='text-white text-center mb-2'>Express Delivery</span>
                                <span className='bg-white icon-container'> <img className='icons mt-3' src={thirdimg} alt="" /> </span>
                            </div>
                           </div>
                           
                       </div>
                    </div>
                 </div>
            </div>
        </div>
        </div>
  )
}

export default StaticCardFooter