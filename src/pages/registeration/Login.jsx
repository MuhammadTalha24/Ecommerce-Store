import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from '../../context/data/Mycontext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/FireBaseConfig'
import Loader from '../../components/Loader'
import { toast } from 'react-toastify'

const Login = () => {
    const context = useContext(myContext)
    const navigate = useNavigate()
    const {loading,setLoading} = context
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const login = async()=>{
        setLoading(true)
        if(email == '' || password == ''){
            toast.error("All Fields Are Required")
            setLoading(false)
        }
        try {
            const result =  await signInWithEmailAndPassword(auth,email,password)
            toast.success("Login Successfully")
            localStorage.setItem('user',JSON.stringify(result))
            setLoading(false)
            navigate('/')
    
        } catch (error) {
           if(error.code == 'auth/invalid-credential'){
            toast.error('Password Do Not Match')
            setLoading(false)
           }
           if(error.code == 'auth/invalid-email'){
            toast.error('Invalid Email Address')
            setLoading(false)
           }
        }
    }
  return (
    <div className='login-wrapper'>
        {loading && <Loader/>}
        {!loading && 
            <div className="container">

            <h1 className='text-center mb-4 text-black'>InfinityWears</h1>
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="card py-4 rounded-3 bg-black text-white">
                    <div className="card-body text-center">
                         <h4 className='mb-4'>Login</h4>
                         <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className='form-control mb-3 p-2' placeholder='example@gmail.com' />
                         <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className='form-control mb-3 p-2' placeholder='●●●●●●●●●' />
                         <button onClick={login} className='btn btn-primary w-100 mb-3'>Login</button>
                         <span >Dont have an account?<Link className='text-decoration-none ms-1 text-white fw-bold' to={'/signup'}>Signup</Link></span>
                    </div>
                </div>
               <div className="d-flex justify-content-center mt-4">
               <Link  to={'/'}><button className='btn btn-outline-dark'>Back to Home</button></Link>
               </div>
            </div>
        </div>
    </div>
        }
    </div>
  )
}

export default Login