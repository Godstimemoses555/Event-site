import React, { useState } from "react";
import fullhero from "../assets/fullhero.jpg";
import header2 from "../assets/header2.png";
import user1 from "../assets/user1.png";
import twodots from "../assets/twodots.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
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

  const descriptionText = `Phosrescen ntiate principle-centered networks via magnetic 
  Apildous eviscuate standards compliant fully tested metrics without 
  creative design futureproof web.`;

  return (
    <div className="overflow-x-hidden">
      <div
        className="flex flex-col items-center justify-center p-5"
        style={{
          background: `url(${fullhero}) center/cover no-repeat`,
        }}
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 w-[90%] max-w-[1000px] mb-10">
          <img
            className="w-[40%] h-[150px] object-contain"
            src={header2}
            alt="Event Header"
          />
          <h1 className="text-[40px] md:text-[60px] font-bold text-white leading-tight">
            Event Schedule
          </h1>
          <p className="text-white text-[18px] md:text-[20px] tracking-wide">
            A Representation of the event planning
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full max-w-[1200px] px-4">
          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full md:w-1/2 gap-5">
            <div className="bg-white border-t-4 border-pink-500 rounded-md py-3 text-center font-bold text-[22px]">
              24 December 2021
            </div>

            {/* Item 1 */}
            {!pick ? (
              <div
                className="bg-cyan-950 rounded-md p-4 flex items-center justify-between w-[90%] mx-auto cursor-pointer transition-all duration-300 hover:bg-cyan-900"
                onClick={() => setPick(true)}
              >
                <img className="w-[50px]" src={user1} alt="" />
                <h2 className="text-white font-semibold text-[18px] md:text-[20px] flex-1 text-center">
                  Registration & Breakfast
                </h2>
                <img className="w-[20px]" src={twodots} alt="" />
              </div>
            ) : (
              <div
                className="bg-white rounded-md p-6 w-[90%] mx-auto text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg space-y-4"
                onClick={() => setPick(false)}
              >
                <h2 className="text-pink-500 font-bold text-[20px]">
                  Registration Break
                </h2>
                <p className="text-black font-medium leading-relaxed text-[15px] whitespace-pre-line">
                  {descriptionText}
                </p>
              </div>
            )}

            {/* Item 2 */}
            {!open ? (
              <div
                className="bg-cyan-950 rounded-md p-4 flex items-center justify-between w-[90%] mx-auto cursor-pointer transition-all duration-300 hover:bg-cyan-900"
                onClick={() => setOpen(true)}
              >
                <img className="w-[50px]" src={icon1} alt="" />
                <h2 className="text-white font-semibold text-[18px] md:text-[20px] flex-1 text-center">
                  Lunch Break
                </h2>
                <img className="w-[20px]" src={twodots} alt="" />
              </div>
            ) : (
              <div
                className="bg-white rounded-md p-6 w-[90%] mx-auto text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg space-y-4"
                onClick={() => setOpen(false)}
              >
                <h2 className="text-pink-500 font-bold text-[20px]">
                  Lunch Break Details
                </h2>
                <p className="text-black font-medium leading-relaxed text-[15px] whitespace-pre-line">
                  {descriptionText}
                </p>
              </div>
            )}

            {/* Item 3 */}
            {!chop ? (
              <div
                className="bg-cyan-950 rounded-md p-4 flex items-center justify-between w-[90%] mx-auto cursor-pointer transition-all duration-300 hover:bg-cyan-900"
                onClick={() => setChop(true)}
              >
                <img className="w-[50px]" src={user4} alt="" />
                <h2 className="text-white font-semibold text-[18px] md:text-[20px] flex-1 text-center">
                  Reinventing Experience
                </h2>
                <img className="w-[20px]" src={twodots} alt="" />
              </div>
            ) : (
              <div
                className="bg-white rounded-md p-6 w-[90%] mx-auto text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg space-y-4"
                onClick={() => setChop(false)}
              >
                <h2 className="text-pink-500 font-bold text-[20px]">
                  Reinventing Experience
                </h2>
                <p className="text-black font-medium leading-relaxed text-[15px] whitespace-pre-line">
                  {descriptionText}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col w-full md:w-1/2 gap-5">
            <div className="bg-white border-t-4 border-pink-500 rounded-md py-3 text-center font-bold text-[22px]">
              25 December 2021
            </div>

            {[
              { state: bum, setState: setBum, title: "Reinventing Experience" },
              { state: path, setState: setPath, title: "Lunch Break" },
              { state: view, setState: setView, title: "Digital Event Information" },
              { state: show, setState: setShow, title: "Registration & Breakfast" },
            ].map(({ state, setState, title }, i) =>
              !state ? (
                <div
                  key={i}
                  className="bg-cyan-950 rounded-md p-4 flex items-center justify-between w-[90%] mx-auto cursor-pointer transition-all duration-300 hover:bg-cyan-900"
                  onClick={() => setState(true)}
                >
                  <img className="w-[50px]" src={user2} alt="" />
                  <h2 className="text-white font-semibold text-[18px] md:text-[20px] flex-1 text-center">
                    {title}
                  </h2>
                  <img className="w-[20px]" src={twodots} alt="" />
                </div>
              ) : (
                <div
                  key={i}
                  className="bg-white rounded-md p-6 w-[90%] mx-auto text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg space-y-4"
                  onClick={() => setState(false)}
                >
                  <h2 className="text-pink-500 font-bold text-[20px]">
                    {title}
                  </h2>
                  <p className="text-black font-medium leading-relaxed text-[15px] whitespace-pre-line">
                    {descriptionText}
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