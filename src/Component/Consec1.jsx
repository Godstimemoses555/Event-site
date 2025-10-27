import React from 'react'
import footerimg4 from "../assets/footerimg4.png"
import footerimg2 from "../assets/footerimg2.png"
import footerimg3 from "../assets/footerimg3.png"

const Consec1 = () => {
  return (
    <div className="bg-[rgb(0,22,63)] overflow-hidden">
      <div className="flex flex-col lg:flex-row p-[20px] gap-[20px]">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-[20px] w-full lg:w-[60%]">

          {/* Header Text */}
          <div className="flex flex-col items-center justify-center text-center gap-[10px] px-[10px]">
            <h1 className="text-white text-[28px] sm:text-[32px] lg:text-[35px] font-bold">
              Don't Be A Stranger Just Say Hello.
            </h1>
            <p className="text-white text-[14px] sm:text-[15px] leading-relaxed">
              We do fast phone repair. In most cases, we’ll repair your device in just minutes —
              normally we’ll get it connected quickly.
            </p>
          </div>

          {/* Form Section */}
          <div className="flex flex-col gap-[15px] w-full items-center">
            
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row gap-[10px] w-full justify-center">
              <input
                className="text-white text-[16px] sm:text-[18px] w-full sm:w-[300px] h-[50px] p-[15px] border-2 border-white/20 rounded-[5px] bg-transparent placeholder:text-gray-300"
                type="text"
                placeholder="Name*"
              />
              <input
                className="text-white text-[16px] sm:text-[18px] w-full sm:w-[300px] h-[50px] p-[15px] border-2 border-white/20 rounded-[5px] bg-transparent placeholder:text-gray-300"
                type="text"
                placeholder="Email*"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row gap-[10px] w-full justify-center">
              <input
                className="text-white text-[16px] sm:text-[18px] w-full sm:w-[300px] h-[50px] p-[15px] border-2 border-white/20 rounded-[5px] bg-transparent placeholder:text-gray-300"
                type="text"
                placeholder="Number*"
              />
              <input
                className="text-white text-[16px] sm:text-[18px] w-full sm:w-[300px] h-[50px] p-[15px] border-2 border-white/20 rounded-[5px] bg-transparent placeholder:text-gray-300"
                type="text"
                placeholder="Subject*"
              />
            </div>

            {/* Message */}
            <div className="w-full flex justify-center">
              <textarea
                className="text-white text-[16px] sm:text-[18px] w-full sm:w-[650px] h-[200px] sm:h-[300px] p-[15px] border-2 border-white/20 rounded-[5px] bg-transparent placeholder:text-gray-300"
                placeholder="Message"
              ></textarea>
            </div>

            {/* Button */}
            <button className="w-[200px] h-[50px] bg-white text-pink-500 text-[15px] font-bold rounded-[5px] hover:scale-105 transition-transform duration-300">
              Send Your Message
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center justify-center bg-[rgb(0,16,46)] rounded-[5px] p-[20px] gap-[20px] w-full lg:w-[40%]">
          
          <div className="flex flex-col gap-[10px] text-center lg:text-left">
            <h1 className="text-white text-[26px] sm:text-[30px] font-bold">Get Information</h1>
            <h3 className="text-white text-[16px] sm:text-[18px]">
              Our contact information details <br /> and follow us on social media.
            </h3>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-[20px] w-full items-center">
            {/* Phone */}
            <div className="flex flex-col items-center lg:items-start gap-[10px]">
              <img className="w-[200px] h-[50px] object-contain" src={footerimg4} alt="phone" />
              <div>
                <h1 className="text-[20px] text-white">Phone Number</h1>
                <h3 className="text-[15px] text-white">1201 Park Street, Fifth Avenue</h3>
              </div>
            </div>

            {/* Office Address */}
            <div className="flex flex-col items-center lg:items-start gap-[10px]">
              <img className="w-[200px] h-[50px] object-contain" src={footerimg2} alt="office" />
              <div>
                <h1 className="text-[20px] text-white">Office Address</h1>
                <h3 className="text-[15px] text-white">07041126796</h3>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center lg:items-start gap-[10px]">
              <img className="w-[200px] h-[50px] object-contain" src={footerimg3} alt="email" />
              <div>
                <h1 className="text-[20px] text-white">Send Email</h1>
                <h3 className="text-[15px] text-white">inyanggodstime63@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Consec1
