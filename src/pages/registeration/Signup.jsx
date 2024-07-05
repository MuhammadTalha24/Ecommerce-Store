import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../../context/data/Mycontext'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, fireDB } from '../../firebase/FireBaseConfig'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import Loader from '../../components/Loader'

const Signup = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const context = useContext(myContext)
    const {loading,setLoading} = context

    const signup =async () => {
        setLoading(true)
        if(name == '' || email == '' || password == ''){
            toast.error("All Fields Are Required")
            setLoading(false)
        }
        try{
            const users = await createUserWithEmailAndPassword(auth,email,password)
            const user = {
                name: name,
                email: users.user.email,
                uid: users.user.uid,
                time: Timestamp.now()
            }

            const userRef = collection(fireDB,"user")
            await addDoc(userRef,user)
            toast.success("Signup Successfully")
            setEmail(''),
            setName(''),
            setPassword('')
            setLoading(false)
            navigate('/login')
        }catch(err){
          if(err.code == 'auth/invalid-email'){
            toast.error("Invalid Email Address")
            setLoading(false)
          }
          if(err.code == 'auth/email-already-in-use'){
            toast.error("User Already Exist")
            setLoading(false)
          }
       
        }
    }
  return (

    <div className='login-wrapper'>
          {loading && <Loader />}
        {!loading && 
            <div className="container">
  
            <h1 className='text-center mb-4 text-black'>InfinityWears</h1>
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="card py-4 rounded-3 bg-black text-white">
                    <div className="card-body text-center">
                         <h4 className='mb-4'>Signup</h4>
                         <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className='form-control mb-3 p-2' placeholder='Enter Your Name' />
                         <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='form-control mb-3 p-2' placeholder='example@gmail.com' />
                         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control mb-3 p-2' placeholder='●●●●●●●●●' />
                         <button onClick={signup} className='btn btn-primary w-100 mb-3'>Signup</button>
                         <span >Do you already have an account?<Link  className='text-decoration-none ms-1 text-white fw-bold' to={'/login'}>Login</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        }
</div>
  )
}

export default Signup