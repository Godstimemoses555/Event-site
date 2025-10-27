import React, { use, useState } from 'react'
import { Menu,X} from "lucide-react"
import logoimg from "../assets/logoimg.png"
import fullhero from "../assets/fullhero.jpg"
import { Link } from 'react-router-dom'

const Navmobile = () => {
 const [nav,setNav]=useState(false)
 const [open,setOpen]=useState(false)
  return (
    <div>
    <div  className="flex lg:hidden items-center justify-between p-4"
     style={{background:`url(${fullhero})`, backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"}}>
      <img src={logoimg} alt="" />
      
      {
        nav?

        (
          <X onClick={()=>setNav(false)} className="w-6 h-6 text-black cursor-pointer" style={{color:nav===false?"black":"pink"}}/>
        ):
        (
          <Menu onClick={()=>setNav(true)} className="w-6 h-6 text-black cursor-pointer " style={{color:nav?"black":"pink"}}/>
        )
      }

      
        
      
       
    </div>

    

    

    <div
  className={`flex flex-col w-[350px] gap-[20px] p-[10px] items-center justify-center bg-white rounded-[8px]
  transition-all duration-700 ease-in-out transform
  ${nav ? "opacity-100 translate-y-0 h-[350px]" : "opacity-0 -translate-y-5 h-0 overflow-hidden p-[10px]"}
  `}
>
  <Link className='text-[20px] text-pink-500 font-bold'>Home</Link>
  <Link className='text-[20px] text-pink-500 font-bold'>About</Link>
  <Link to={"/Contact"} className='text-[20px] text-pink-500 font-bold'>Contact</Link>
  <Link className='text-[20px] text-pink-500 font-bold'>Blog</Link>

  <button className='flex w-[200px] h-[50px] bg-pink-500 text-white text-[20px] p-[10px] items-center justify-center rounded-[5px]'>
    Send Message
  </button>
</div>

    </div>
  )
}

export default Navmobile