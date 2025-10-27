import React, { useState } from 'react'
import footerimg from "../assets/footerimg.jpg"
import news1 from "../assets/news1.jpg"
import news2 from "../assets/news2.jpg"
import news3 from "../assets/news3.jpg"

const Compsec3 = () => {

    const [dam,setDam]=useState(false)
    const [bom,SetBom]=useState(false)
    const [enter,setEnter]=useState(false)
   const [state,setState]=useState(false)
    
  return (
    <div>



      <div className="flex w-full  gap-[10px] items-center justify-center bg-[rgb(0,16,46)] p-[10px] lg:flex-row ">

        {/* ABOUT SECTION */}
        <div className="flex lg:w-[30%] gap-[10px] p-[20px] flex-col">
          <div className="flex lg:w-[300px] gap-[20px] flex-col">
            <h1 className="text-white text-[30px] font-bold">About Kagont</h1>
            <h3 className="text-white text-[20px]">
              Energistica coordinate highly efficient process <br /> improvement viaing awesome
            </h3>
          </div>

          <div className="flex lg:w-[300px] lg:h-[200px]">
            <img className="w-[400px] object-contain rounded-[10px] max-w-full" src={footerimg} alt="" />
          </div>
        </div>

        {/* NEWS SECTION */}
        <div className="flex lg:w-[40%] gap-[20px] p-[20px] flex-col">
          <div className="flex lg:w-[300px] gap-[20px] flex-col">
            <h1 className="text-white text-[30px] font-bold">Our Recent News</h1>
          </div>

          <div className="flex flex-col gap-[15px] w-full max-w-[400px]">
            {[{ img: news1, state: dam, setState: setDam },
              { img: news2, state: bom, setState: SetBom },
              { img: news3, state: enter, setState: setEnter }]
              .map(({ img, state, setState }, i) => (
                <div key={i} className="flex gap-[10px] items-center justify-center w-full ">
                  <img
                    onMouseEnter={() => setState(true)}
                    onMouseLeave={() => setState(false)}
                    style={{ transform: state ? "scale(1.2)" : "none", transition: "transform 0.4s ease" }}
                    className="w-[100px] lg:h-[150px] object-contain rounded-[10px] max-w-full"
                    src={img}
                    alt=""
                  />
                  <div className="flex flex-col lg:w-[200px]">
                    <h1
                      onMouseEnter={() => setState(true)}
                      onMouseLeave={() => setState(false)}
                      style={{ color: state ? "purple" : "white" }}
                      className="text-white text-[20px] font-bold"
                    >
                      Eviscoulate Economy Sound <br /> Technologies Before.
                    </h1>
                    <h2 className="text-pink-500 text-[15px]">October 22, 2025</h2>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* NEWSLETTER SECTION */}
        <div className="flex lg:w-[30%] gap-[20px] p-[20px] flex-col">
          <div className="flex lg:w-[200px] gap-[20px] flex-col">
            <h1 className="text-white text-[30px] font-bold">Our Newsletter</h1>
            <h3 className="text-white text-[20px]">
              Energistica coordinate highly efficient process <br /> improvement viaing awesome
            </h3>
          </div>

          <div className="flex lg:w-[300px] lg:h-[200px] flex-col gap-[20px]">
            <input
              className="lg:w-[250px] lg:h-[50px] bg-white rounded-[5px] p-[20px] outline-none"
              type="text"
              placeholder="Enter Email"
            />
            <button
              onClick={() => nav('About')}
              className="lg:w-[150px] lg:h-[50px] bg-pink-600 text-white text-[20px] rounded-[5px] border-b-4 border-white hover:border-b-0 hover:border-black duration-500"
            >
              Send Message
            </button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Compsec3