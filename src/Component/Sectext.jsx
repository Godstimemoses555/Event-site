import React from 'react'
import fullhero from "../assets/fullhero.jpg"

const Sectext = () => {
  return (
    <div>
      <div
        className="flex gap-[20px] items-center justify-center flex-col  lg:h-full w-full"
        style={{
          background: `url(${fullhero})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
           // prevents inner element overflow
        }}
      >
        <div className="flex flex-col items-center justify-center gap-[20px] w-[100%] ">
          <h1 className="font-bold text-[60px] text-white md:text-[18px] lg:text-[50px] text-center">
            Big Digital Meetup
          </h1>
          <h4 className="text-white font-bold text-[40px] text-center">
            About The Digital Meetup Conference 2025
          </h4>

          <p className="text-white text-[20px] text-center">
            Phosrescently ntiate principle centered networks via magnetic
            services a Entusiasticaly streamline fulys tested metricels <br />
            apildiously evisculate standards compliant fullys tested metrics
            without futureproof web services anfullys tested metrice <br />
            without creative desi futureproof web services without freproof we
            that and a services enabled apidiously evisculate are <br /> standards
            compliant web services are afor error free
          </p>

          <div className="flex gap-[20px] w-[300px] h-[200px] items-center justify-center lg:flex-row">
            <button className="w-[200px] h-[50px] rounded-[5px] bg-pink-500 text-white font-bold cursor-pointer">
              Register Now
            </button>

            <button className="w-[200px] h-[50px] rounded-[5px] bg-white text-pink-500 font-bold cursor-pointer">
              Purchase Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sectext
