import React from 'react'
import fullhero from "../assets/fullhero.jpg"
import textimg from  "../assets/textimg.png"
import textimg2 from "../assets/textimg2.png"
import textimg3 from "../assets/textimg3.png"
import textimg4 from "../assets/textimg4.png"
import textimg5 from "../assets/textimg5.png"
import textimg6 from "../assets/textimg6.png"
import textimg10 from "../assets/textimg10.png"
import textimg8 from "../assets/textimg8.png"
import textimg9 from "../assets/textimg9.png"


const Sec8 = () => {
  return (
    <div>
    <div className='flex items-center justify-center lg:flex-col lg:w-[100%]' style={{background:`url(${fullhero})`
    ,backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <div className='flex items-center justify-center p-[20px]  lg:flex-col gap-[40px]    w-[50%] flex-col '>
          <div className='flex  items-center justify-center gap-[20px] flex-col'>
            <h1 className='text-[60px] font-bold text-white md:text-[36px] sm:text[28px] '>Event Sponsors</h1>
            <h3 className='text-white text-[20px] tracking-widest'>Check Who Makes The Event Possible</h3>
          </div>

          <div className='flex w-[350px] gap-[10px] items-center justify-center lg:justify-between ' >
           <img  className='w-[50px] object-contain animate-ping transition-infinity duration-700 ' src={textimg} alt="" />
           <img  className='w-[50px] object-contain animate-ping transition-infinity duration-700' src={textimg2} alt="" />
           <img  className='w-[50px] object-contain animate-ping transition-infinity duration-700' src={textimg3} alt="" />

          </div>

          <div className='flex  w-[350px] gap-[10px] items-center justify-center lg:justify-between ' >
            <img className='w-[50px] object-contain animate-ping transition-infinity duration-700' src={textimg4} alt="" />
            <img  className='w-[50px] object-contain animate-ping transition-infinity duration-700' src={textimg5} alt="" />
            <img  className='w-[50px] object-contain animate-ping transition-infinity duration-700' src={textimg6} alt="" />

          </div>

          <div className='flex  w-[350px] gap-[10px] items-center justify-center lg:justify-between  ' >
            <img  className='w-[50px] object-contain animate-ping transition-infinity duration-700' src={textimg10} alt="" />
            <img  className='w-[50px] object-contain animate-ping transition-infinity duration-700' src={textimg8} alt="" />
            <img  className='w-[50px] object-contain animate-ping transition-infinity duration-700' src={textimg9} alt="" />

          </div>

          <button className='w-[160px] h-[50px] rounded-[5px] bg-white text-pink-500 text-[15px] font-bold'>
            Become a sponsoure
          </button>

        </div>


    </div>
    </div>
  )
}

export default Sec8