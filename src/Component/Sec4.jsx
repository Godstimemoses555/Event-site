import React from 'react'
import sec1img from "../assets/sec1img.jpg"
import header2 from "../assets/header2.png"
import member4 from "../assets/member4.png"

const Sec4 = () => {
  return (
    <div>
    <div className='flex items-center justify-center  flex-col ' style={{background:`url(${sec1img})`,
     backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >


        <div className=' flex items-center justify-center   gap-[20px] flex-col' >
            <img className='w-[400px] h-[200px] object-contain' src={header2} alt="" />
            <div className='flex items-center justify-center gap-[20px]   flex-col'>
                 <h1 className='text-[50px] font-bold text-white '>Our Speakers</h1>
                 <h4 className='text-[20px] text-white tracking-widest text-center'>Meet Our World’s Leading Speakers

                               speaker
                          Zisnad Q. Alex</h4>
        

            </div>
           

        </div>


       

    </div>

    </div>
  )
}

export default Sec4