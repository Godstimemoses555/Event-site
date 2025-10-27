// ...existing code...
import React, { useState } from 'react'
import fullhero from "../assets/fullhero.jpg"
import header2 from "../assets/header2.png"
import user1 from "../assets/user1.png"
import twodots from "../assets/twodots.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"
import icon1 from "../assets/icon1.png"

// ...existing code...
const Sec3 = () => {
  const [pick, setPick] = useState(false)
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [view, setView] = useState(false)
  const [chop, setChop] = useState(false)
  const [path, setPath] = useState(false)
  const [click, setclick] = useState(false)
  const [bum, setBum] = useState(false)

  return (
    <div>
      <div
        className="flex h-full flex-col p-[20px] items-center justify-center"
        style={{
          background: `url(${fullhero})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        {/* reduce forced hero height on small screens so it doesn't cause vertical overflow */}
        <div className="flex w-[90%] gap-[20px] items-center justify-center md:h-[80vh] flex-col">
          <img className="w-[40%] h-[150px] object-contain" src={header2} alt="" />
          <h1 className="text-[60px] font-bold text-white text-center">Event Schedule</h1>
          <p className="text-white text-[20px] tracking-widest text-center">A Representation of the event planning</p>
        </div>

        {/* Main two-column area: stays column on small screens, two columns on md+ */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[30px] w-full max-w-[1200px] px-[10px]">
          {/* Left column */}
          <div className="flex flex-col w-full md:w-1/2 gap-[8px]">
            <div className="flex flex-col w-[90%] h-[70px] rounded-[5px] bg-white items-center justify-center mx-auto border-t-4 border-pink-500">
              <div className="flex items-center justify-center">
                <h2 className="text-[30px]">24 December 2021</h2>
              </div>
            </div>

            {/* Item 1 */}
            {!pick ? (
              <div
                className="flex w-[90%] h-[80px] rounded-[5px] bg-cyan-950 p-[10px] items-center justify-center mx-auto"
                onMouseEnter={() => setPick(true)}
              >
                {/* changed fixed w-[300px] -> responsive w-full max-w-[300px] to avoid horizontal overflow on small screens */}
                <div className="flex w-full max-w-[300px] h-[50px] rounded-full gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user1} alt="" />
                  <div className="flex-1">
                    <h2 className="text-white text-[20px] font-bold">Registration & Breakfast</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-[90%] h-[320px] rounded-[5px] bg-white p-[10px] items-center justify-center gap-[30px] mx-auto">
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user2} alt="" />
                  <div className="flex-1">
                    <h2 className="text-pink-500 text-[20px] font-bold">Registration Break</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>

                <div
                  className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center"
                  onMouseLeave={() => setPick(false)}
                >
                  <img className="w-[50px] h-[50px] object-contain" src={user3} alt="" />
                  <div className="flex-1">
                    <p className="text-black text-[15px] font-bold">
                      Phosrescen ntiate prncple centered networks via
                      <br /> magnetc Apildous eviscuate standards complant fulys
                      <br /> tested metrs without creative desi futureproof web
                    </p>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            )}

            {/* Repeat pattern for other items: open, chop, click */}
            {!open ? (
              <div
                className="flex w-[90%] h-[80px] rounded-[5px] bg-cyan-950 p-[10px] items-center justify-center mx-auto"
                onMouseEnter={() => setOpen(true)}
              >
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={icon1} alt="" />
                  <div className="flex-1">
                    <h2 className="text-white text-[20px] font-bold">Launch Break</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-[90%] h-[320px] rounded-[5px] bg-white p-[10px] items-center justify-center gap-[30px] mx-auto">
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user2} alt="" />
                  <div className="flex-1">
                    <h2 className="text-pink-500 text-[20px] font-bold">Registration Break</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>

                <div
                  className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center"
                  onMouseLeave={() => setOpen(false)}
                >
                  <img className="w-[50px] h-[50px] object-contain" src={user3} alt="" />
                  <div className="flex-1">
                    <p className="text-black text-[15px] font-bold">
                      Phosrescen ntiate prncple centered networks via
                      <br /> magnetc Apildous eviscuate standards complant fulys
                      <br /> tested metrs without creative desi futureproof web
                    </p>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            )}

            {!chop ? (
              <div
                className="flex w-[90%] h-[80px] rounded-[5px] bg-cyan-950 p-[10px] items-center justify-center mx-auto"
                onMouseEnter={() => setChop(true)}
              >
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user4} alt="" />
                  <div className="flex-1">
                    <h2 className="text-white text-[20px] font-bold">Reinventing Experience</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-[90%] h-[320px] rounded-[5px] bg-white p-[10px] items-center justify-center gap-[30px] mx-auto">
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user2} alt="" />
                  <div className="flex-1">
                    <h2 className="text-pink-500 text-[20px] font-bold">Registration Break</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>

                <div
                  className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center"
                  onMouseLeave={() => setChop(false)}
                >
                  <img className="w-[50px] h-[50px] object-contain" src={user3} alt="" />
                  <div className="flex-1">
                    <p className="text-black text-[15px] font-bold">
                      Phosrescen ntiate prncple centered networks via
                      <br /> magnetc Apildous eviscuate standards complant fulys
                      <br /> tested metrs without creative desi futureproof web
                    </p>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            )}

            {!click ? (
              <div
                className="flex w-[90%] h-[80px] rounded-[5px] bg-cyan-950 p-[10px] items-center justify-center mx-auto"
                onMouseEnter={() => setclick(true)}
              >
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user2} alt="" />
                  <div className="flex-1">
                    <h2 className="text-white text-[20px] font-bold">Digital Event Information</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-[90%] h-[320px] rounded-[5px] bg-white p-[10px] items-center justify-center gap-[30px] mx-auto">
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user2} alt="" />
                  <div className="flex-1">
                    <h2 className="text-pink-500 text-[20px] font-bold">Registration Break</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>

                <div
                  className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center"
                  onMouseLeave={() => setclick(false)}
                >
                  <img className="w-[50px] h-[50px] object-contain" src={user3} alt="" />
                  <div className="flex-1">
                    <p className="text-black text-[15px] font-bold">
                      Phosrescen ntiate prncple centered networks via
                      <br /> magnetc Apildous eviscuate standards complant fulys
                      <br /> tested metrs without creative desi futureproof web
                    </p>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="flex flex-col w-full md:w-1/2 gap-[8px]">
            <div className="flex flex-col w-[90%] h-[70px] rounded-[5px] bg-white items-center justify-center mx-auto border-t-4 border-pink-500">
              <div className="flex items-center justify-center mb-[0]" >
                <h2 className="text-[30px]">24 December 2021</h2>
              </div>
            </div>

            {!bum ? (
              <div
                className="flex w-[90%] h-[80px] rounded-[5px] bg-cyan-950 p-[10px] items-center justify-center mx-auto"
                onMouseEnter={() => setBum(true)}
              >
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user1} alt="" />
                  <div className="flex-1">
                    <h2 className="text-white text-[20px] font-bold">Reinventing Experience</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-[90%] h-[320px] rounded-[5px] bg-white p-[10px] items-center justify-center gap-[30px] mx-auto">
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user2} alt="" />
                  <div className="flex-1">
                    <h2 className="text-pink-500 text-[20px] font-bold">Registration Break</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>

                <div
                  className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center"
                  onMouseLeave={() => setBum(false)}
                >
                  <img className="w-[50px] h-[50px] object-contain" src={user3} alt="" />
                  <div className="flex-1">
                    <p className="text-black text-[15px] font-bold">
                      Phosrescen ntiate prncple centered networks via
                      <br /> magnetc Apildous eviscuate standards complant fulys
                      <br /> tested metrs without creative desi futureproof web
                    </p>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            )}

            {!path ? (
              <div
                className="flex w-[90%] h-[80px] rounded-[5px] bg-cyan-950 p-[10px] items-center justify-center mx-auto"
                onMouseEnter={() => setPath(true)}
              >
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={icon1} alt="" />
                  <div className="flex-1">
                    <h2 className="text-white text-[20px] font-bold">Launch Break</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-[90%] h-[320px] rounded-[5px] bg-white p-[10px] items-center justify-center gap-[30px] mx-auto">
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user2} alt="" />
                  <div className="flex-1">
                    <h2 className="text-pink-500 text-[20px] font-bold">Registration Break</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>

                <div
                  className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center"
                  onMouseLeave={() => setPath(false)}
                >
                  <img className="w-[50px] h-[50px] object-contain" src={user3} alt="" />
                  <div className="flex-1">
                    <p className="text-black text-[15px] font-bold">
                      Phosrescen ntiate prncple centered networks via
                      <br /> magnetc Apildous eviscuate standards complant fulys
                      <br /> tested metrs without creative desi futureproof web
                    </p>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            )}

            {!view ? (
              <div
                className="flex w-[90%] h-[80px] rounded-[5px] bg-cyan-950 p-[10px] items-center justify-center mx-auto"
                onMouseEnter={() => setView(true)}
              >
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user4} alt="" />
                  <div className="flex-1">
                    <h2 className="text-white text-[20px] font-bold">Digital Event Information</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-[90%] h-[320px] rounded-[5px] bg-white p-[10px] items-center justify-center gap-[30px] mx-auto">
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user2} alt="" />
                  <div className="flex-1">
                    <h2 className="text-pink-500 text-[20px] font-bold">Launch Break</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>

                <div
                  className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center"
                  onMouseLeave={() => setView(false)}
                >
                  <img className="w-[50px] h-[50px] object-contain" src={user3} alt="" />
                  <div className="flex-1">
                    <p className="text-black text-[15px] font-bold">
                      Phosrescen ntiate prncple centered networks via
                      <br /> magnetc Apildous eviscuate standards complant fulys
                      <br /> tested metrs without creative desi futureproof web
                    </p>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            )}

            {!show ? (
              <div
                className="flex w-[90%] h-[80px] rounded-[5px] bg-cyan-950 p-[10px] items-center justify-center mx-auto"
                onMouseEnter={() => setShow(true)}
              >
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user2} alt="" />
                  <div className="flex-1">
                    <h2 className="text-white text-[20px] font-bold">Registration & Breakfast</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-[90%] h-[320px] rounded-[5px] bg-white p-[10px] items-center justify-center gap-[30px] mx-auto">
                <div className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center">
                  <img className="w-[50px] h-[50px] object-contain" src={user2} alt="" />
                  <div className="flex-1">
                    <h2 className="text-pink-500 text-[20px] font-bold">Registration Break</h2>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>

                <div
                  className="flex w-full max-w-[300px] h-[50px] gap-[20px] items-center justify-center"
                  onMouseLeave={() => setShow(false)}
                >
                  <img className="w-[50px] h-[50px] object-contain" src={user3} alt="" />
                  <div className="flex-1">
                    <p className="text-black text-[15px] font-bold">
                      Phosrescen ntiate prncple centered networks via
                      <br /> magnetc Apildous eviscuate standards complant fulys
                      <br /> tested metrs without creative desi futureproof web
                    </p>
                  </div>
                  <div className="w-[50px]">
                    <img className="w-[20px] h-[20px] object-contain" src={twodots} alt="" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec3
// ...existing code...