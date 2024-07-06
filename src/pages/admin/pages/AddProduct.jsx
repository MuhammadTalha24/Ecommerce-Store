import React, { useContext } from 'react'
import { myContext } from '../../../context/data/Mycontext'

const AddProduct = () => {
  const context = useContext(myContext)
  const {addProduct,setProducts,products} = context
  return (
    <>
    <div className="p-6">
    <div className="container">
        <div className="col-md-12 align-items-center">
            <div className="card rounded-3 overflow-hidden">
                <div className="card-body  bg-dark text-white">
                <h3 className='text-center mb-5 border-bottom py-4'>Add Product</h3>
       <div className="row">
       <div className="mb-3 col-md-6">
        <label htmlFor="producttitle" className="form-label">Product Title</label>
        <input value={products.title} onChange={e=> setProducts({...products,title: e.target.value})} type="text" className="form-control" id="producttitle" placeholder="Title" />
        </div>
        <div className="mb-3 col-md-6">
        <label htmlFor="productprice" className="form-label">Product Price</label>
        <input value={products.price} onChange={e=> setProducts({...products, price:e.target.value})} type="text" className="form-control" id="productprice" placeholder="Price" />
        </div>
       </div>
       <div className="row">
       <div className="mb-3 col-md-6">
        <label htmlFor="productimgurl" className="form-label">Product Image Url</label>
        <input value={products.imageUrl} onChange={e=> setProducts({...products,imageUrl:e.target.value})} type="text" className="form-control" id="productimgurlme" placeholder="Image Url" />
        </div>
        <div className="mb-3 col-md-6">
        <label htmlFor="productcategory" className="form-label">Product Category</label>
        <input value={products.category} onChange={e=> setProducts({...products,category:e.target.value})} type="text" className="form-control" id="productcategory" placeholder="Category" />
        </div>
        <div>
        <div className="mb-3">
        <label htmlFor="productdescription" className="form-label">Product Description</label>
        <textarea value={products.description} onChange={e=> setProducts({...products,description:e.target.value})} className="form-control" id="productdescription" placeholder="Description" />
        </div>
            <button onClick={addProduct} className='btn btn-warning'>Add Product</button>
        </div>
       </div>
        
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default AddProduct