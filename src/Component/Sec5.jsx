import React, { useState } from 'react'
import member4 from "../assets/member4.png"
import fullhero from "../assets/fullhero.jpg"
import roundedimg from "../assets/roundedimg.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import member1 from "../assets/member1.png"
import group from "../assets/group.png"

const Sec5 = () => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [pen, setPen] = useState("jak")
  const [run, setRun] = useState("pit")
  const [good, setGood] = useState("rem")
  const [dup, setDup] = useState("lil")
  const [capet, setCapet] = useState("url")
  const [calm, setCalm] = useState("blur")

  return (
    <section
      
      style={{
        background: `url(${fullhero})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
       >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-6">
        {/* Speaker card - stacks on mobile, stays side-by-side on md+ */}
        <article className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start gap-4 bg-transparent p-4">
          <img
            src={member4}
            alt="member"
            className="w-full md:w-1/2 h-auto md:h-[200px] object-contain"
          />

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div>
              <h2
                onClick={() => setOpen(!open)}
                className="text-white text-2xl font-bold cursor-pointer"
                style={{ color: open ? "purple" : "white" }}
              >
                Zisnad Q.Alex
              </h2>
              <h5 className="text-white">Speaker</h5>
            </div>

            <p className="text-white text-sm w-full md:w-[300px]">
              Completely conceptual high quality — nice markers rather than long-term impact on human capital.
            </p>

            <div className="flex gap-3">
              {pen === "jak" ? (
                <img
                  src={instagram}
                  alt="ig"
                  className="w-5 h-5 object-contain"
                  onMouseEnter={() => setPen("jak1")}
                  onMouseLeave={() => setPen("jak")}
                />
              ) : (
                <img
                  src={group}
                  alt="group"
                  className="w-5 h-5 object-contain"
                  onMouseLeave={() => setPen("jak")}
                />
              )}

              {run === "pit" ? (
                <img
                  src={twitter}
                  alt="tw"
                  className="w-5 h-5 object-contain"
                  onMouseEnter={() => setRun("pit1")}
                  onMouseLeave={() => setRun("pit")}
                />
              ) : (
                <img
                  src={group}
                  alt="group"
                  className="w-5 h-5 object-contain"
                  onMouseLeave={() => setRun("pit")}
                />
              )}

              {good === "rem" ? (
                <img
                  src={facebook}
                  alt="fb"
                  className="w-5 h-5 object-contain"
                  onMouseEnter={() => setGood("rem1")}
                  onMouseLeave={() => setGood("rem")}
                />
              ) : (
                <img
                  src={group}
                  alt="group"
                  className="w-5 h-5 object-contain"
                  onMouseLeave={() => setGood("rem")}
                />
              )}
            </div>
          </div>
        </article>

        {/* Speaker card 2 - same responsive column on mobile */}
        <article className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start gap-4 bg-transparent p-2">
          <img
            src={member1}
            alt="member"
            className="w-full md:w-1/2 h-auto md:h-[200px] object-contain"
          />

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div>
              <h2
                onClick={() => setShow(!show)}
                className="text-white text-2xl font-bold cursor-pointer"
                style={{ color: show ? "purple" : "white" }}
              >
                Taylor R.Miller
              </h2>
              <h5 className="text-white">Speaker</h5>
            </div>

            <p className="text-white text-sm w-full md:w-[300px]">
              Completely conceptual high quality — nice markers rather than long-term impact on human capital.
            </p>

            <div className="flex gap-3">
              {dup === "lil" ? (
                <img
                  src={instagram}
                  alt="ig"
                  className="w-5 h-5 object-contain"
                  onMouseEnter={() => setDup("lil1")}
                  onMouseLeave={() => setDup("lil")}
                />
              ) : (
                <img
                  src={group}
                  alt="group"
                  className="w-5 h-5 object-contain"
                  onMouseLeave={() => setDup("lil")}
                />
              )}

              {capet === "url" ? (
                <img
                  src={twitter}
                  alt="tw"
                  className="w-5 h-5 object-contain"
                  onMouseEnter={() => setCapet("url1")}
                  onMouseLeave={() => setCapet("url")}
                />
              ) : (
                <img
                  src={group}
                  alt="group"
                  className="w-5 h-5 object-contain"
                  onMouseLeave={() => setCapet("url")}
                />
              )}

              {calm === "blur" ? (
                <img
                  src={facebook}
                  alt="fb"
                  className="w-5 h-5 object-contain"
                  onMouseEnter={() => setCalm("blur1")}
                  onMouseLeave={() => setCalm("blur")}
                />
              ) : (
                <img
                  src={group}
                  alt="group"
                  className="w-5 h-5 object-contain"
                  onMouseLeave={() => setCalm("blur")}
                />
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Sec5