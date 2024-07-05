import React from 'react'

const UpdateProduct = () => {
  return (
    <div className="p-6">
    <div className="container">
        <div className="col-md-12 align-items-center">
            <div className="card rounded-3 overflow-hidden">
                <div className="card-body  bg-dark text-white">
                <h3 className='text-center mb-5 border-bottom py-4'> Product</h3>
       <div className="row">
       <div className="mb-3 col-md-6">
        <label htmlFor="producttitle" className="form-label">Product Title</label>
        <input type="text" className="form-control" id="producttitle" placeholder="Title" />
        </div>
        <div className="mb-3 col-md-6">
        <label htmlFor="productprice" className="form-label">Product Price</label>
        <input type="text" className="form-control" id="productprice" placeholder="Price" />
        </div>
       </div>
       <div className="row">
       <div className="mb-3 col-md-6">
        <label htmlFor="productimgurl" className="form-label">Product Image Url</label>
        <input type="text" className="form-control" id="productimgurlme" placeholder="Image Url" />
        </div>
        <div className="mb-3 col-md-6">
        <label htmlFor="productcategory" className="form-label">Product Category</label>
        <input type="text" className="form-control" id="productcategory" placeholder="Category" />
        </div>
        <div>
        <div className="mb-3">
        <label htmlFor="productdescription" className="form-label">Product Description</label>
        <textarea  className="form-control" id="productdescription" placeholder="Description" />
        </div>
            <button className='btn btn-warning '>Add Product</button>
        </div>
       </div>
        
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default UpdateProduct