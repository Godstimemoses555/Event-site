import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Mainpage = () => {
  const [clicl,setClick]=useState(false)
  return (
    <div>
      <div className='flex lg:w-[500px] lg:h-[400px] gap-[20px] bg-white rounded-[5px] shadow-white flex-col  items-center justify-center'>
        <div className='flex gap-[10px] p-[10px] flex-col lg:h-[700px] lg:w-[600px] items-center justify-center'>

           <input className='flex lg:w-[300px] lg:h-[50px] items-center justify-center  p-[10px]   bg-pink-600 text-white text-[20px]' type="text"  placeholder='Login'/>
        <input  className='flex lg:w-[300px] lg:h-[50px] items-center justify-center  p-[10px]   bg-pink-600 text-white text-[20px] ' type="text"  placeholder='Email or Phone number'/>
        <input  className='flex lg:w-[300px] lg:h-[50px] items-center justify-center p-[10px]  bg-pink-600 text-white text-[20px] ' type="password"  placeholder='Password'/>

          <input  className='flex lg:w-[300px] lg:h-[50px] items-center justify-center p-[10px]  bg-pink-600 text-white text-[20px] ' type="text"  placeholder='Confirm Password'/>
          <Link className='text-[15px] text-pink-400'>
          Don't HAve Account?
          </Link>

            <input  className='flex lg:w-[300px] lg:h-[50px] items-center justify-center p-[10px]  bg-pink-600 text-white text-[20px] ' type="text"  placeholder='Create Account'/>




        </div>

       

       

      </div>
    
    </div>
  )
}

export default Mainpage