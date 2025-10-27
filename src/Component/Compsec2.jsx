import React from 'react'
import footerimg2 from "../assets/footerimg2.png"
import footerimg3 from "../assets/footerimg3.png"
import footerimg4 from "../assets/footerimg4.png"

const Compsec2 = () => {
  return (
    <div>

           <div className='flex w-full lg:h-[50vh] h-fit bg-linear-0-purple-black flex-col lg:flex-row'>
        
                <div className='flex w-full justify-center items-center lg:w-full bg-[rgb(0,16,46)] p-[10px] lg:flex-row flex-col overflow-hidden'>
        
                  <div className='flex items-center justify-center w-full lg:w-1/3'>
                    <div className='flex w-full max-w-[400px] h-[100px] border-white border-b lg:border-r p-[20px]'>
                      <div className='flex w-full gap-[10px] items-center justify-center mt-0'>
                        <img className='w-[30px] h-[30px] object-cover' src={footerimg2} alt="" />
                        <h1 className='text-white text-[15px] font-bold'>Phone Number:+234 07041126796</h1>
                      </div>
                    </div>
                  </div>
        
                  <div className='flex items-center justify-center w-full lg:w-1/3'>
                    <div className='flex w-full max-w-[400px] h-[100px] border-white border-b lg:border-r p-[20px]'>
                      <div className='flex w-full gap-[10px] items-center justify-center mt-0'>
                        <img className='w-[30px] h-[30px] object-cover' src={footerimg3} alt="" />
                        <h1 className='text-white text-[15px] font-bold'>Email:inyanggodstime63@gmail.com</h1>
                      </div>
                    </div>
                  </div>
        
                  <div className='flex items-center justify-center w-full lg:w-1/3 mb-[20px]'>
                    <div className='flex w-full max-w-[400px] h-[100px] border-white border-b p-[20px]'>
                      <div className='flex w-full gap-[10px] items-center justify-center mt-0'>
                        <img className='w-[30px] h-[30px] object-cover' src={footerimg4} alt="" />
                        <h1 className='text-white text-[15px] font-bold'>Address:+47km Redemption <br /> Camp ogunstate</h1>
                      </div>
                    </div>
                  </div>
        
                </div>
        
              </div>

    </div>
  )
}

export default Compsec2