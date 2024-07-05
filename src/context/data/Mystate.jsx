import React, { useState } from 'react'
import  {myContext}  from './Mycontext'
export const Mystate = (props) => {
    const state = {
        name:"Muhammad Talha",
        rollno: 16
    }
    const [loading,setLoading] = useState(false)
  return (
    <myContext.Provider value={{state,loading,setLoading}}>
    {props.children}
    </myContext.Provider>
  )
}
