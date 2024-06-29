import React from 'react'
import  {myContext}  from './Mycontext'
export const Mystate = (props) => {
    const state = {
        name:"Muhammad Talha",
        rollno: 16
    }
  return (
    <myContext.Provider value={state}>
    {props.children}
    </myContext.Provider>
  )
}
