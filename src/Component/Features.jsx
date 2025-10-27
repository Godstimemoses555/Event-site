import React from 'react'
import sec1img from "../assets/sec1img.jpg"
import roundedimg from "../assets/roundedimg.png"

const Features = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat px-4"
        style={{ backgroundImage: `url(${sec1img})` }}
      >
        <div className="flex flex-col items-center w-full max-w-[700px]">
          <img
            className="w-[80%] sm:w-[300px] md:w-[350px] h-auto object-contain"
            src={roundedimg}
            alt="Rounded visual"
          />
          
          <div className="flex flex-col items-center justify-center mt-[-5vh] sm:mt-[-6vh] md:mt-[-8vh] text-center">
            <h1 className="text-white text-[22px] sm:text-[26px] md:text-[30px] font-bold leading-tight">
              Contact us via mail
            </h1>
            <h3 className="text-[16px] sm:text-[17px] md:text-[18px] text-white">
              Home -{" "}
              <span className="text-pink-500 text-[18px] sm:text-[19px] md:text-[20px] font-bold">
                Contact Us
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
