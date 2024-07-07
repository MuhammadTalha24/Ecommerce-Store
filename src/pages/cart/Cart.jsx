import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import OrderModal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';




  const Cart = () => {
    const cartItems = useSelector((state) => state.cart)  
    const dispatch = useDispatch()
   
    const [modalShow, setModalShow] = useState(false);
   const deleteCart = (item) =>{
    dispatch(deleteFromCart(item));
    toast.success("Deleted From Cart Successfully")
   }

   useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartItems))
   },[cartItems])

   const [totalamount,setTotalAmount] = useState(0)

   useEffect(()=>{
    let temp=0;
    cartItems.forEach((cartitem)=>{
      temp = temp + parseInt(cartitem.price)
    })
    setTotalAmount(temp)
   },[cartItems])

   const shipping = parseInt(250)
   const withoutDelivery = totalamount
   const grandTotal = shipping + totalamount

  return (
    <div className='p-6'>
      <div className='container-fluid pb-4 px-0 border-bottom'>
      <div className='container'> 
      <Link className="text-decoration-none text-black fs-6" to={'/'}><i className="bi bi-caret-left me-3"></i>Home Page</Link>
      <h3 className='fw-bold mt-4'>Shopping Cart ({cartItems.length})</h3>
      </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className={ cartItems.length > 0 ? 'border col-md-8' : 'border-0 col-md-8'}>
              {
                cartItems.map((item,index)=>(
                  <div key={index } className='card border-bottom border-0'>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                       <div className='product-image'>
                       <img className='img rounded-3' src={item.imageUrl} alt="" />
                       </div>
                      </div>
                      <div className="col-md-8">
                     <h6 className='text-dark opacity-50 mb-2'>InfinityWear</h6>
                      <h2 className='fs-4 mb-2'>{item.title}</h2>
                      <div className="d-flex align-items-center">
                      <h4 className='fs-5 mb-0'>Rs {item.price}</h4>
                      <span className='text-success ms-3'>38% off</span>
                      </div>
                 
                      <div className="d-flex gap-4 align-items-center mt-4">
                       <button  className='btn btn-sm btn-outline-dark fs-6'><i className="bi bi-dash"></i></button>
                       <span className='fs-4 fw-bold'>1</span>
                       <button  className='btn btn-sm btn-outline-dark fs-6'><i className="bi bi-plus"></i></button>
                      </div>
                      <button onClick={()=>deleteCart(item)}  className='btn btn-transparent border-0 mt-3'><i className="bi text-danger bi-trash me-2"></i> Remove</button>
            
                     
                      </div>
                    </div>
                  </div>
                </div>
                ))}
          

              </div>
              <div className="col-md-4">
              <h3 className='fw-bold ms-3'>Order Summary</h3>
              <div className="card">
                <div className="card-body">
                  
                  <div className='border-bottom'>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className='fs-6 fw-bold mb-0'>Bag Total({cartItems.length})</h5><span className='fs-6 mb-0 fw-bold'>{withoutDelivery}</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className='fs-6 mb-0'>Product Saving</h5><span className='fs-6 mb-0 '>Rs 799</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className='fs-6  mb-0'>Shipping:</h5><span className='fs-6 mb-0'>{shipping}</span>
                  </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3 pb-3 border-bottom">
                    <h5 className='fs-6 fw-bold mb-0'>Total Amount</h5><span className='fs-6 mb-0 fw-bold'>Rs {grandTotal}</span>
                  </div>
                  <button className="btn btn-primary w-100 mt-4"  onClick={() => setModalShow(true)}>
                    Buy Now
                  </button>
                  <OrderModal   show={modalShow} onHide={() => setModalShow(false)}/>
                  
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

export default Cart