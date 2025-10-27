// ...existing code...
import React, { useState } from 'react'
import sec1img from "../assets/sec1img.jpg"
import eventsimg1 from "../assets/eventsimg1.jpg"
import likeicon from "../assets/likeicon.png"
import fullhero from "../assets/fullhero.jpg"

const Sec11 = () => {
    const [dam,setDam]=useState(false)
    const [bug,setBug]=useState(false)
    const [pin,setPin]=useState(false)
   
  return (
    <div >
    {/* add overflow-hidden and responsive spacing to prevent horizontal overflow */}
    <div className='flex w-full gap-[20px] items-center justify-center lg:flex-row flex-col' style={{background:`url(${sec1img})`, backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}>

           

            <div className='flex lg:w-[23%] w-full items-center justify-center flex-col shadow-2xl shadow-black'>

                {/* make image container responsive (no fixed 500px) */}
                <div className='flex w-full max-w-[700px] h-[200px] flex-col'>
                <img onMouseEnter={()=>setDam(!dam)} onMouseLeave={()=>setDam(!dam)} 
                 className='w-full h-[200px] object-cover duration-500' src={eventsimg1} alt="" style={{rotate:dam===true?"-5deg":"0deg"}}/>
            
            </div>

            {/* make info panel responsive (no fixed 280px) */}
            <div className='flex w-full max-w-[280px] h-[200px] items-center justify-center flex-col gap-[20px] border-b-4 border-pink-500'
             style={{background:`url(${fullhero})`,backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
               backgroundSize: "cover"}}>
                    <h1 onMouseEnter={()=>setDam(!dam)} onMouseLeave={()=>setDam(!dam)} style={{color:dam?"purple":"white"}}
                     className='text-[20px] text-center font-bold'>How Marching For Science <br />  Risk Politicalizing It</h1>

                    <div className='flex w-full max-w-[220px] gap-[10px] items-center justify-center'>
                    <img className='w-[20px] h-[20px] object-contain' src={likeicon} alt="" />
                    <h3 className='text-white text-[16px]'> December 24, 2021</h3>

                </div>


                </div> 

                
            </div>


            
            <div className='flex lg:w-[23%] w-full items-center justify-center flex-col shadow-2xl shadow-black overflow-hidden'>

                <div className='flex w-full max-w-[500px] h-[200px] flex-col'>
                <img onMouseEnter={()=>setPin(!pin)} onMouseLeave={()=>setPin(!pin)} 
                 className='w-full h-[200px] object-cover duration-500' src={eventsimg1} alt="" style={{rotate:pin===true?"-5deg":"0deg"}}/>
            
            </div>

            <div className='flex w-full max-w-[280px] h-[200px] items-center justify-center
             flex-col gap-[20px] border-b-4 border-pink-500'
             style={{background:`url(${fullhero})`,backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
               backgroundSize: "cover"}}>
                    <h1 onMouseEnter={()=>setPin(!pin)} onMouseLeave={()=>setPin(!pin)} style={{color:pin?"purple":"white"}}
                     className='text-[20px] text-center font-bold'>How Marching For Science <br />  Risk Politicalizing It</h1>

                    <div className='flex w-full max-w-[220px] gap-[10px] items-center justify-center'>
                    <img className='w-[20px] h-[20px] object-contain' src={likeicon} alt="" />
                    <h3 className='text-white text-[16px]'> December 24, 2021</h3>

                </div>


                </div> 

                
            </div>



            <div className='flex lg:h-auto lg:w-[23%] h-full w-full items-center 
            justify-center flex-col shadow-2xl shadow-black overflow-hidden mb-[20px]'>

                <div className='flex w-full max-w-[500px] h-[200px] flex-col'>
                <img onMouseEnter={()=>setBug(!bug)} onMouseLeave={()=>setBug(!bug)} 
                 className='w-full h-[200px] object-cover duration-500' src={eventsimg1} alt="" style={{rotate:bug===true?"-5deg":"0deg"}}/>
            
            </div>

            <div className='flex w-full max-w-[280px] h-[200px] items-center justify-center
             flex-col gap-[20px] border-b-4 border-pink-500'
             style={{background:`url(${fullhero})`,backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
               backgroundSize: "cover"}}>
                    <h1 onMouseEnter={()=>setBug(!bug)} onMouseLeave={()=>setBug(!bug)} style={{color:bug?"purple":"white"}}
                     className='text-[20px] text-center font-bold'>How Marching For Science <br />  Risk Politicalizing It</h1>

                    <div className='flex w-full max-w-[220px] gap-[10px] items-center justify-center'>
                    <img className='w-[20px] h-[20px] object-contain' src={likeicon} alt="" />
                    <h3 className='text-white text-[16px]'> December 24, 2021</h3>

                </div>


                </div> 

                
            </div>



            

    </div>
    </div>
  )
}

export default Sec11
// ...existing code...