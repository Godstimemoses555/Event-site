import React, { useState } from 'react'
import arrow from "../assets/arrow.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"

const Loginnav = () => {
  const [open,setOpen]=useState(false)
  return (
    <div>
    <div className='flex lg:w-full p-2.5 items-center justify-between md:w-fit'>
        <div className='flex lg:w-[500px]'>
             <h1 className='text-white lg:text-[30px] font-bold'>Welcome To Event site</h1>


        </div>

        <div className='flex lg:w-[600px] lg:h-[80px]  items-center justify-center gap-[20px]'>
            <h2 className='text-white lg:text-[18px]'>Connect via Social Media Handles</h2>

            {
              !open?
              (

                  <img onClick={()=>setOpen(!open)} className='lg:w-[20px] lg:h-[20px] object-contain md:w-[10px] sm:w-[10px] sm:h-[10px]'
         src={arrow} alt="" />

              ):

              (
                <div onClick={()=>setOpen(!open)}  
                className='flex lg:w-[200px] lg:h-[50px] bg-pink-600 
                 left-0 roundedn-[5px] items-center justify-center gap-2.5 p-2.5'>

                  <a href="https://web.facebook.com/profile.php?id=100079298393625">
                               <img className='w-[30px] h-[30px] object-contain' src={instagram} alt="" />
                  
                            </a>
                           
                            <a href="https://x.com/godstime_i39699">
                  
                          
                               <img  className='w-[30px] h-[30px] object-contain' src={twitter} alt="" />
                  
                  
                  
                            </a>
                  
                            <a href="">
                               <img className='w-[30px] h-[30px] object-contain' src={facebook} alt="" />
                  
                            </a>

                </div>
              )

            }
      


    </div>

    
       
    </div>


    
    </div>
  )
}

export default Loginnav