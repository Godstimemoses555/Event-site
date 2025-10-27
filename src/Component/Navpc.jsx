import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoimg from "../assets/logoimg.png"
import cartimg from "../assets/cartimg.png"
import fullhero from "../assets/fullhero.jpg"
import menu3img from "../assets/menu3img.jpg"
import {Menu,X} from "lucide-react"

// ...existing code...
const Navpc = () => {
  const [nav,setNav]=useState(false)
  const [cartOpen,setCartOpen]=useState(false)  

  const [open,setOpen]=useState(false)
  const [hover, setHover] = useState(false) // hover state
  const [selecte,setSelecte]=useState(false)

  const [showdropdown,setShowdropdown]=useState(false)

  return (
    <div className='flex gap-[20px] flex-col'>

    
      <div className='w-[100%] gap-[20px] font-bold text-[20px] justify-between hidden lg:flex' style={{background:`url(${fullhero})`,
       backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

       
        <div className='flex'>
        <img className='w-[200px] h-[100px] object-contain' src={logoimg} alt="" />

        </div>

        <div className='flex w-[50%] items-center justify-center gap-[20px]'>
           <Link to={("Home")} className='text-white'>Home</Link>
        <Link style={{display:showdropdown===true?"flex":"none"}} 
        onMouseEnter={()=>setShowdropdown(true)} to={("Feature")} className='text-white'>Feature +</Link>
        <Link to={("Speaker")} className='text-white' >Speaker +</Link>
        <Link to={("Blog")} className='text-white'>Blog +</Link>
        <Link to={("/Contact")} className='text-white'>Contact</Link>

        </div>

        <div 
          className='flex w-[30%] items-center justify-center gap-4' 
          onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)}
        >
         
          
            
               <img onMouseEnter={()=>setSelecte(!selecte)} 
               onMouseLeave={()=>setSelecte(selecte)}
               style={{display:false?"none":"flex"}}
           className='w-[150px] h-[50px] object-contain' src={cartimg} alt="" />

          

          {!hover ? (
            <button className='flex w-[150px] h-[60px] bg-white text-pink-400 items-center justify-center border-0 rounded'>
              Purchase Ticket
            </button>
          ) : (
            <button className='flex w-[150px] h-[60px] bg-pink-400 text-white items-center justify-center border-0 rounded'>
              Purchase Ticket
            </button>
          )}
        </div>


         <div  className="flex [@media(min-width:768px)]:hidden items-center ">
              
              {
                nav?
        
                (
                  <X onClick={()=>setNav(false)} className="w-6 h-6 text-black cursor-pointer"/>
                ):
                (
                  <Menu onClick={()=>setNav(true)} className="w-6 h-6 text-black cursor-pointer"/>
                )
              }
                
              
               
            </div>

          
      </div>

          
           
        
           
    </div>
  )
}

export default Navpc
