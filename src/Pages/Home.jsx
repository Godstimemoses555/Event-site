import React from 'react'
import "../App.css"
import fullhero from "../assets/fullhero.jpg"
import Navpc from '../Component/Navpc'
import Sec1 from '../Component/Sec1'
import Sec2 from '../Component/Sec2'
import Sec3 from '../Component/Sec3'
import Sec4 from '../Component/Sec4'
import Sec5 from '../Component/Sec5'
import Sec6 from '../Component/Sec6'
import Sec7 from '../Component/Sec7'
import Sec8 from '../Component/Sec8'
import Sec9 from '../Component/Sec9'
import Sec10 from '../Component/Sec10'
import Sectext from '../Component/Sectext'
import Navmobile from '../Component/Navmobile'
import Slicke from './Slicke'
import Sec11 from '../Component/Sec11'
import Smalldiv from '../Component/Smalldiv'
import Footer from '../Component/Footer'
import Smallfooter from '../Component/Smallfooter'
import Footerdiv from '../Component/Footerdiv'
import Totop from '../Component/Totop'



const Home = () => {
 
  return (
  <div>


      <Navpc/>
      
  <Navmobile />
   
    

    <div className={`flex h-full flex-col ` }
  
    style={{background:`url(${fullhero})`, backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}
    
    >
      <Sec1/>
      <Sec2/>
      <Sectext/>
      <Sec3/>
      <Sec4/>
      <Sec5/>
      <Sec6/>
      <Sec7/>
      <Sec8/>
      <Sec9/>
      <Sec10/>
      <Slicke/>
      <Smalldiv/>
      <Sec11/>
      <Footer/>
      <Smallfooter/>
      <Footerdiv/>
      <Totop/>
      

    </div>
   
    </div>
  )
}

export default Home