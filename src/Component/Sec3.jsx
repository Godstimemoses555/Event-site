import React, { useState } from "react";
import fullhero from "../assets/fullhero.jpg";
import header2 from "../assets/header2.png";
import user1 from "../assets/user1.png";
import twodots from "../assets/twodots.png";
import user4 from "../assets/user4.png";
import icon1 from "../assets/icon1.png";

const Sec3 = () => {
  const [pick, setPick] = useState(false);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const [chop, setChop] = useState(false);
  const [path, setPath] = useState(false);
  const [click, setClick] = useState(false);
  const [bum, setBum] = useState(false);

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center p-2.5 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fullhero})` }}
      >
        {/* Header section */}
        <div className="flex flex-col items-center text-center gap-4  w-[1200px]  mb-10 px-2.5">
          <img
            className="w-[80%] sm:w-[60%] md:w-[40%] h-auto object-contain"
            src={header2}
            alt="Event Header"
          />
          <h1 className="text-[32px] md:text-[60px] font-bold text-white leading-tight">
            Event Schedule
          </h1>
          <p className="text-white text-[16px] md:text-[20px] tracking-wide">
            A Representation of the event planning
          </p>
        </div>

        {/* Main section */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-[1200px]  px-4 items-center justify-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full md:w-1/2 gap-4 items-center">
            <div className="bg-white border-t-4 border-pink-500  text-center font-bold text-[20px] w-full max-w-[300px]">
              24 December 2021
            </div>

            {/* ITEM 1 */}
            {!pick ? (
              <div
                className="bg-cyan-950  p-2.5 flex items-center justify-between w-[300px] cursor-pointer transition"
                onClick={() => setPick(true)}
              >
                <img className="w-[50px]" src={user1} alt="" />
                <h2 className="text-white font-semibold text-[16px] md:text-[20px] text-center flex-1">
                  Registration & Breakfast
                </h2>
                <img className="w-[20px]" src={twodots} alt="" />
              </div>
            ) : (
              <div
                className="bg-white  p-2.5 w-[300px] text-center cursor-pointer transition"
                onClick={() => setPick(false)}
              >
                <h2 className="text-pink-500 font-bold text-[20px] mb-3">
                  Registration Break
                </h2>
                <p className="text-black font-medium leading-relaxed text-[15px]">
                  Phosrescen ntiate principle-centered networks via magnetic
                  Apildous eviscuate standards compliant fully tested metrics
                  without creative design futureproof web.
                </p>
              </div>
            )}

            {/* Other items */}
            {/* ... your other blocks here, same structure ... */}

            {!chop ? (
              <div
                className="bg-cyan-950  p-2.5 flex items-center justify-between w-[300px] cursor-pointer transition"
                onClick={() => setChop(true)}
              >
                <img className="w-[50px]" src={user4} alt="" />
                <h2 className="text-white font-semibold text-[16px] md:text-[20px] text-center flex-1">
                  Reinventing Experience
                </h2>
                <img className="w-[20px]" src={twodots} alt="" />
              </div>
            ) : (
              <div
                className="bg-white  p-2.5 w-full  sm:w-[400px] text-center cursor-pointer transition"
                onClick={() => setChop(false)}
              >
                <h2 className="text-pink-500 font-bold text-[20px] mb-3">
                  Reinventing Experience
                </h2>
                <p className="text-black font-medium leading-relaxed text-[15px]">
                  Phosrescen ntiate principle-centered networks via magnetic
                  Apildous eviscuate standards compliant fully tested metrics
                  without creative design futureproof web.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col w-full md:w-1/2 gap-4 items-center">
            <div className="bg-white border-t-4 border-pink-500  text-center font-bold text-[20px]  w-[300px]">
              24 December 2021
            </div>

            {[
              { state: bum, setState: setBum, title: "Reinventing Experience" },
              { state: path, setState: setPath, title: "Launch Break" },
              { state: view, setState: setView, title: "Digital Event Information" },
              { state: show, setState: setShow, title: "Registration & Breakfast" },
            ].map(({ state, setState, title }, i) =>
              !state ? (
                <div
                  key={i}
                  className="bg-cyan-950 p-2.5 flex items-center justify-betweenw-[300px] cursor-pointer transition"
                  onClick={() => setState(true)}
                >
                  <img className="w-[50px]" src={user1} alt="" />
                  <h2 className="text-white font-semibold text-[16px] md:text-[20px] text-center flex-1">
                    {title}
                  </h2>
                  <img className="w-[20px]" src={twodots} alt="" />
                </div>
              ) : (
                <div
                  key={i}
                  className="bg-white  p-2.5 w-[300px] text-center cursor-pointer transition"
                  onClick={() => setState(false)}
                >
                  <h2 className="text-pink-500 font-bold text-[18px] mb-3">
                    {title}
                  </h2>
                  <p className="text-black font-medium leading-relaxed text-[13px]">
                    Phosrescen ntiate principle-centered networks via magnetic
                    Apildous eviscuate standards compliant fully tested metrics
                    without creative design futureproof web.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
