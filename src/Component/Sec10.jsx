// ...existing code...
import React from 'react'
import clothesimg from "../assets/clothesimg.png"
import fullhero  from "../assets/fullhero.jpg"
import checkimg from "../assets/checkimg.png"

const Sec10 = () => {
  return (
    <div>
      <div
        className="flex flex-col md:flex-row gap-6 p-4 md:p-[30px] items-center md:items-start h-full"
        style={{
          background: `url(${fullhero})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        {/* image: full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-[500px] flex items-center justify-center">
          <img
            className="w-full md:w-[500px] h-auto object-contain"
            src={clothesimg}
            alt="clothes"
          />
        </div>

        {/* text/content: full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-[500px] p-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-[40px] md:text-[50px] text-white font-bold">Event Gifts</h1>
            <h2 className="text-[16px] md:text-[20px] text-white tracking-widest">Our Complimentary Gift For You</h2>

            <p className="text-[14px] md:text-[20px] text-white">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point info using Lorem Ipsum is that it has a more-or-less
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[16px] md:text-[20px] text-white">Exclusive T-shirt</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[16px] md:text-[20px] text-white">Exclusive T-shirt</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[16px] md:text-[20px] text-white">Exclusive T-shirt</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[16px] md:text-[20px] text-white">Exclusive T-shirt</h3>
              </div>

              <button className="w-[150px] h-[50px] bg-white flex items-center justify-center rounded-[5px] mt-3">
                <h2 className="text-[16px] md:text-[20px] text-pink-500">Register Now</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec10
// ...existing code...