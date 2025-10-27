// ...existing code...
import React from 'react'
import bgimg from "../assets/bgimg.png"
import bgimg1 from "../assets/bgimg1.png"
import accountingimg from "../assets/accountingimg.png"

const Sec1 = () => {
  return (
    <div>
        <div className='flex gap-[20px] p-[20px] w-full flex-col lg:flex-row'>

            <div className='flex w-[100%] lg:w-[50%] gap-[20px] flex-col lg:h-[100%] lg:items-start items-center justify-center' >

                 <h1 className='font-bold text-pink-400 text-center leading-tight text-[40px] sm:text-[32px] md:text-[48px] lg:text-[70px]'>
                   Digital World <br /> Meetup 2021
                 </h1>

                 <p className='text-[20px] text-white text-center lg:text-left '>Join Our International Family Today! Please <br /> Call us For More info.</p>

                 <button className='flex w-[200px] h-[50px] hover:bg-pink-300 transition-all transform duration-500 bg-white rounded-[5px] items-center justify-center text-pink-400 font-bold text-[20px] border-0 mt-[20px]'>
                    Register Now
                 </button>

            </div>

            <div className='flex w-[50%] h-[100%] '>
                <img className='w-[100%] h-[100%] object-contain hidden lg:flex' src={bgimg1} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Sec1
// ...existing code...