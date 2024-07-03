import React from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'

const ProductInfo = () => {
  return (
   <Layout>
     <div className='p-6'>
     <div className="container">
      <div className='d-flex justify-content-start m-3'><nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
    <li class="breadcrumb-item"><a href="#">Kids</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav></div>
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                <div className="col-md-6">
    
                    <div className="col-md-12">
                        <img className='productinfo-image' src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/06032024/155_1709542577_65e58cb126e5e_electric-blue-tie-and-dye-t-shirtt-shirtsmendeez-pk-0012080-974672-714507841982.jpg" alt="" />
                        <img  className='productinfo-image' src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/06032024/538_1709542578_65e58cb245a1a_electric-blue-tie-and-dye-t-shirtt-shirtsmendeez-pk-0012080-711554-1441821447723.jpg" alt="" />
                       
                    </div>
                    <div className="col-md-12">
                    <img  className='productinfo-image' src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/06032024/976_1709542579_65e58cb337b97_electric-blue-tie-and-dye-t-shirtt-shirtsmendeez-pk-0012080-541757-320110021437.jpg" alt="" />
                    <img  className='productinfo-image' src="https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/06032024/809_1709542580_65e58cb45cb96_electric-blue-tie-and-dye-t-shirtt-shirtsmendeez-pk-0012080-590307-723528297501.jpg" alt="" />
                    </div>

                </div>
                <div className="col-md-6">
                    <h2>Electric Blue Tie And Dye T-Shirt</h2>
                    <h4>Rs 2,799</h4>

                    <div className="d-flex flex-column mt-4">
                        <h5>Select Sizes:</h5>
                        <div className="d-flex align-items-center gap-3">
                        <input type="checkbox" class="btn-check" id="btn-check-1" autocomplete="off" />
                        <label class="btn btn-outline-dark" for="btn-check-1">XS</label>
                        <input type="checkbox" class="btn-check" id="btn-check-2" autocomplete="off" />
                        <label class="btn btn-outline-dark" for="btn-check-2">S</label>
                        <input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" />
                        <label class="btn btn-outline-dark" for="btn-check-3">M</label>
                        <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off" />
                        <label class="btn btn-outline-dark" for="btn-check-4">L</label>
                        </div>
                    </div>
                    <div className='mt-4 border-bottom pb-4'>
                    <button className='btn py-3 fw-medium btn-primary w-75 rounded-0 mb-2'>Buy now</button>
                    <button className='btn py-3 fw-medium btn-outline-dark w-75 rounded-0'>Add to cart</button>
                    </div>

                    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item py-3">
    <h2 class="accordion-header">
      <button class="accordion-button bg-transparent fw-medium text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Product Detail
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item py-3">
    <h2 class="accordion-header">
      <button class="accordion-button bg-transparent text-black fw-medium collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Delivery and Returns
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
</div>
<div className="d-flex border-top pt-4 flex-column">
<h5>Rating & Reviews:</h5>
<div className="d-flex align-items-center gap-2">
    <i className='bi bi-star-fill text-warning'></i>
    <i className='bi bi-star-fill text-warning'></i>
    <i className='bi bi-star-fill text-warning'></i>
    <i className='bi bi-star-fill text-warning'></i>
    <i className='bi bi-star-fill text-warning'></i>
</div>
<div className="d-flex mt-2 align-items-center">
    <span>25 Ratings | </span>
    <span className='ms-2'>15 Reviews</span>
</div>
</div>
                </div>
                </div>
            </div>
        </div>
    </div>
     </div>
   </Layout>
  )
}

export default ProductInfo