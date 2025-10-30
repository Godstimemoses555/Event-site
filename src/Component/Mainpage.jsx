import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import hide from "../assets/hide.png"
import view from "../assets/view.png"

const Mainpage = () => {
  const [click,setClick]=useState(false)
  return (
    <div>
      <div className='flex lg:w-[500px] lg:h-[400px] gap-[20px] bg-white rounded-[5px] shadow-white flex-col  items-center justify-center'>
        <div className='flex gap-[10px] p-[10px] flex-col lg:h-[700px] lg:w-[600px] items-center justify-center'>

           <input className='flex lg:w-[300px] lg:h-[50px] items-center justify-center  p-[10px]   bg-pink-600 text-white text-[20px]' type="text"  placeholder='Login'/>
        <input  className='flex lg:w-[300px] lg:h-[50px] items-center justify-center  p-[10px]   bg-pink-600 text-white text-[20px] ' type="text"  placeholder='Email or Phone number'/>
        <input  className='flex lg:w-[300px] lg:h-[50px] items-center justify-center p-[10px]  bg-pink-600 text-white text-[20px] ' type="password"  placeholder='Password'/>
         

          <div className='flex  justify-between lg:w-[320px] lg:h-[50px] relative p-2.5 items-center'>
              <input  className='flex lg:w-[300px] lg:h-[50px] items-center justify-center p-[10px]  bg-pink-600 text-white text-[20px] ' type={click?"text":"password"}
                placeholder='Confirm Password'  />

                {click?

                (

                <img className='w-[20px] h-[20px] object-contain absolute right-12' 
                onClick={()=>setClick(!click)}  src={view} alt=""  style={{display:click?"view":"text"}}/>
                  
                ):

                (

                <img  className='w-[20px] h-[20px] object-contain absolute right-12'
              onClick={()=>setClick(!click)} src={hide} alt=""  style={{display:click?"hide":" view"}}/>

                )
                  
                }

                
             
            
             
          </div>
        
          <Link className='text-[15px] text-pink-400'>
          Don't HAve Account?
          </Link>

         

          <input  className='flex lg:w-[300px] lg:h-[50px] items-center justify-center p-[10px]  bg-pink-600 text-white text-[20px] ' type="text"
               placeholder='Create Account'/>
             


           



        </div>

       

       

      </div>
    
    </div>
  )
}

export default Mainpage