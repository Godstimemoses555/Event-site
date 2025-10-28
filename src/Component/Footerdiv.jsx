import React from 'react'
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import { href } from 'react-router-dom'

const Footerdiv = () => {
  return (
    <div>
      <div className='w-[100%] lg:h-[50px] bg-pink-500 flex items-center justify-center lg:flex-row gap-[10px] flex-col'>
        <div className='flex items-center justify-center text-center'>
          <h1 className='text-white lg:text-[18px] text-[15px] font-bold'>
            @2025 Design by Godstime All Rights Reserve
          </h1>
        </div>
        <div className='flex w-[300px] p-2.5 gap-2.5 items-center justify-center'>
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
      </div>
    </div>
  )
}

export default Footerdiv
