import React from 'react'
import fullhero from "../assets/fullhero.jpg"

const Smalldiv = () => {
  return (
    <div>
         <div className='flex w-[100%] h-[50vh] items-center justify-center flex-col' 
         style={{background:`url(${fullhero})`,backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"}} >
                <h1 className='text-white text-[50px] font-bold'>Recent News</h1>
                <h4 className='text-white text-[20px] tracking-widest'>Start Your Remarkable Journey

                 </h4>

            </div>
    </div>
  )
}

export default Smalldiv