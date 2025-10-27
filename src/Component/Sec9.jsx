import React, { useState } from 'react'
import fullhero from "../assets/fullhero.jpg"
import roundedimg from "../assets/roundedimg.png"
import pricingimg2 from "../assets/pricingimg2.svg"
import checkimg from "../assets/checkimg.png"
import group from "../assets/group.png"

const Sec9 = () => {
  const [ram, setRam] = useState(false)
  const [bam, setBam] = useState(false)
  const [tom, setTom] = useState(false)

  return (
    <section
      
      style={{
        background: `url(${fullhero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">
        {/* header */}
        <div
          className="w-full flex flex-col items-center gap-4 py-6"
          style={{
            background: `url(${roundedimg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <h2 className="text-3xl md:text-[50px] text-white font-bold text-center">
            Our Pricing Plan
          </h2>
          <h4 className="text-white text-sm md:text-[20px] tracking-widest text-center">
            Choose Your Plan That Fits You Best
          </h4>
        </div>

        {/* mobile = column, desktop (md+) = row */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Card 1 */}
          <article className="w-full md:w-[380px] flex flex-col items-center bg-transparent">
            <img className="w-full h-auto object-contain" src={pricingimg2} alt="pricing" />
            <div className="w-full bg-black/50 p-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Event Attendance</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Networking Area access</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Tea & coffee</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Lunch</h3>
              </div>

              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[20px] text-pink-500">${24}</span>
                  <span className="text-[14px] text-pink-500">ex. Vat</span>
                </div>

                <button className="px-4 py-2 bg-transparent border border-pink-500 text-pink-500 rounded">
                  Get Ticket
                </button>

                <div
                  className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center cursor-pointer"
                  style={{ background: ram ? "purple" : "white" }}
                  onMouseEnter={() => setRam(true)}
                  onMouseLeave={() => setRam(false)}
                  aria-label="more"
                >
                  <img className="w-4 h-4 object-contain" src={group} alt="" />
                </div>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="w-full md:w-[380px] flex flex-col items-center bg-transparent">
            <img className="w-full h-auto object-contain" src={pricingimg2} alt="pricing" />
            <div className="w-full bg-black/50 p-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Event Attendance</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Networking Area access</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Tea & coffee</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Lunch</h3>
              </div>

              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[20px] text-pink-500">${24}</span>
                  <span className="text-[14px] text-pink-500">ex. Vat</span>
                </div>

                <button className="px-4 py-2 bg-transparent border border-pink-500 text-pink-500 rounded">
                  Get Ticket
                </button>

                <div
                  className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center cursor-pointer"
                  style={{ background: bam ? "purple" : "white" }}
                  onMouseEnter={() => setBam(true)}
                  onMouseLeave={() => setBam(false)}
                  aria-label="more"
                >
                  <img className="w-4 h-4 object-contain" src={group} alt="" />
                </div>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="w-full md:w-[380px] flex flex-col items-center bg-transparent">
            <img className="w-full h-auto object-contain" src={pricingimg2} alt="pricing" />
            <div className="w-full bg-black/50 p-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Event Attendance</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Networking Area access</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Tea & coffee</h3>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-5 h-5 object-contain" src={checkimg} alt="check" />
                <h3 className="text-[18px] text-white font-bold">Lunch</h3>
              </div>

              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[20px] text-pink-500">${24}</span>
                  <span className="text-[14px] text-pink-500">ex. Vat</span>
                </div>

                <button className="px-4 py-2 bg-transparent border border-pink-500 text-pink-500 rounded">
                  Get Ticket
                </button>

                <div
                  className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center cursor-pointer"
                  style={{ background: tom ? "purple" : "white" }}
                  onMouseEnter={() => setTom(true)}
                  onMouseLeave={() => setTom(false)}
                  aria-label="more"
                >
                  <img className="w-4 h-4 object-contain" src={group} alt="" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Sec9
