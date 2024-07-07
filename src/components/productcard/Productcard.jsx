import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../../context/data/Mycontext';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from "../../redux/cartSlice"
import { toast } from 'react-toastify';


const Productcard = ({ item }) => {
  const context = useContext(myContext)
  const {product} = context
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=>state.cart)
 console.log(cartItems)
  const addCart = (product) => {
    const isProductinCart = cartItems.find(cartItem => cartItem.id === product.id)
    if(isProductinCart){
      toast.info("Product Already in the Cart")
    }else{
      dispatch(addToCart(product))
      toast.success("Product Added To Cart")  
    }
    
  }
  return (
    <div className="card border-0 rounded-0 mx-3">
      <img style={{ height: '260px' }} src={item.imageUrl} className="card-img-top rounded-0" alt={item.title} />
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="card-title">{item.title}</h5>
          <span className="d-flex align-items-center mb-2">
            <i className="bi bi-star-fill text-warning me-1"></i>
            <span className="fw-bold">4.5</span>
          </span>
        </div>
        <h6>Rs.{item.price}</h6>
        <div className="d-flex gap-2">
        <Link onClick={()=>addCart(item)} to="#" className="btn btn-outline-primary mt-2">Add to Cart</Link>
  
        </div>
      </div>
    </div>
  );
};

export default Productcard;
