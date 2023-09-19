"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CheckPass from '@/Components/CheckPass'

const page = () => {

    const notify = ()=>{
      toast.success('Copied to clipboard!', {
        position: "top-right",
        autoClose: 1999,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(pass)
  }
const [pass, setpass] = useState("")
console.log(pass)
  return (
    <>
    <div className='container'>
      <div className='col-md-5 mx-auto'>
        <h3 className='text-center text-2xl font-bold my-9'>Check Your Password</h3>
      <form className='form-group'>
        <input type='password' 
        placeholder='Password' 
        autoFocus
        className='form-control my-2' onChange={e => setpass(e.target.value)}/>
       <CheckPass password={pass} />
      </form>
      </div>
    </div>
   <button onClick={()=>{
     notify()
     handleCopy()
   }} onChange={e => setpass(e.target.value)} className='button flex mx-auto bg-blue-500 p-2 px-3 rounded text-white'>
        Copy Password
    </button>
    <ToastContainer/>
  
    </>
  )
}


export default page
