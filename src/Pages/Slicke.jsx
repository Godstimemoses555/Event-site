import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import member1 from "../assets/member1.png"
import memeber2 from "../assets/memeber2.png"
import member3 from "../assets/member3.png"
import member4 from "../assets/member4.png"
import member5 from "../assets/member5.png"
import fullhere from "../assets/fullhero.jpg"



const Slicke = () => {
     const  settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div>
    <div className='w-[100%] h-full items-center gap-[20px]' style={{background:`url(${fullhere})`, backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}>

          <div className='overflow-hidden '>

            <Slider {...settings}>
      <div className='flex w-[150px] h-[300px]  items-center justify-center  flex-col gap-[8px] p-2.5'>
        <img className='w-[100%] h-[100%] object-contain' src={member1} alt="" />
        
        <h3 className='text-white text-[20px] font-bold self-center text-center'>Speaker</h3>
      </div>
      <div   className='flex w-[150px] h-[300px]  items-center justify-center  flex-col gap-[8px] p-2.5'>
        <img className='w-[100%] h-[100%] object-contain' src={memeber2} alt="" />
        <h3 className='text-white text-[20px] font-bold self-center text-center'>Secetary</h3>
      </div>
      <div  className='flex w-[150px] h-[300px]  items-center justify-center  flex-col gap-[8px] p-2.5'>
        <img className='w-[100%] h-[100%] object-contain' src={member3} alt="" />
        <h3 className='text-white text-[20px] font-bold self-center text-center'>Administrator</h3>
      </div>
      <div className='flex w-[150px] h-[300px] items-center justify-center  flex-col gap-[8px] p-2.5 '>
        <img className='w-[100%] h-[100%] object-contain' src={member4} alt="" />
        <h3 className='text-white text-[20px] font-bold self-center text-center '>Consultant</h3>
      </div>
      <div  className='flex w-[150px] h-[300px]  items-center justify-centerflex-col gap-[8px] p-2.5'>
        <img className='w-[100%] h-[100%] object-contain' src={member5} alt="" />
        <h3 className='text-white text-[20px] font-bold  self-center text-center'>Treasurer</h3>
      </div>
      
    </Slider>


          </div>
          
    </div>
    </div>
  )
}

export default Slicke