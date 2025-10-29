import React from 'react'
import fullhero from "../assets/fullhero.jpg"
import Loginnav from '../Component/Loginnav'
import Mainpage from '../Component/Mainpage'

const Loginpages = () => {
  return (
    <div>
    <div className=' flex lg:w-screen lg:h-screen items-center   flex-col gap-[20px]' style={{background:`url(${fullhero})`,
    backgroundPosition:"center",backgroundRepeat:"no repeate",backgroundSize:"cover"}}>

        <Loginnav/>
        <Mainpage/>

    </div>
    </div>
  )
}

export default Loginpages