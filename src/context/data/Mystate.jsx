import React, { useEffect, useState } from 'react'
import  {myContext}  from './Mycontext'
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, QuerySnapshot, setDoc, Timestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { fireDB } from '../../firebase/FireBaseConfig'
export const Mystate = (props) => {
    const state = {
        name:"Muhammad Talha",
        rollno: 16
    }
    const [loading,setLoading] = useState(false)
    const [products,setProducts] = useState({
      title:"",
      price:"",
      imageUrl: "",
      description:"",
      category: "",
      time: Timestamp.now(),
      date: new Date().toLocaleString(
        "en-US",{
          month:'short',
          day:"2-digit",
          year:'numeric'
        }
      )
       
    });
    //Add Products in database
    const addProduct = async () => {
      if(products.title == '' || products.description == '' || products.imageUrl == '' || products.price == '' || products.category == '' ){
        return toast.error('All Fields Are Required')
      }
      setLoading(true)
      try {
          const productRef = collection(fireDB,'products')
          await addDoc(productRef,products)
          toast.success("Product Added Successfully")
          setTimeout(()=>{
            window.location.href = '/dashboard'
          },800)
          getProductData()
          setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    const [product,setProduct] = useState([]);
    //Get Product
    const getProductData = async () =>{
      setLoading(true)
      try {
        const q = query(collection(fireDB,'products'),orderBy('time'));
        const data = onSnapshot(q,(QuerySnapshot)=>{
          let ProductArray = [];
          QuerySnapshot.forEach((doc)=>{
            ProductArray.push({...doc.data(), id:doc.id})
          });
          setProduct(ProductArray)
          setLoading(false)
        })

        return () => data;
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    useEffect(()=>{
      getProductData();
    },[])

    const edithandle = (item) => {
      setProducts(item)
    }
    //Update Product
    const updateProduct = async () => {
      try {
        await setDoc(doc(fireDB, 'products', products.id), products);
        toast.success("Product Updated Successfully");
        getProductData(); // Assuming this function retrieves updated product data
        setTimeout(() => {
          window.location.href = '/dashboard'; // Redirect to dashboard after 800ms
        }, 800);
      } catch (error) {
        console.error("Error updating product:", error);
      }
    };
    

    //Delete Product
    const deleteProduct = async(item) => {
      try {
        await deleteDoc(doc(fireDB,'products',item.id))
        toast.success("Product Deleted Successfully")
        getProductData()
      } catch (error) {
        
      }
    }


  return (
    <myContext.Provider value={{state,loading,setLoading,product,addProduct,setProducts,products,edithandle,updateProduct,deleteProduct}}>
    {props.children}
    </myContext.Provider>
  )
}
