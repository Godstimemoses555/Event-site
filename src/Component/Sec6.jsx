import React, { useState } from 'react'
import fullhero from "../assets/fullhero.jpg"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import memeber2 from "../assets/memeber2.png"
import member3 from "../assets/member3.png"
import group from "../assets/group.png"

// ...existing code...
const Sec6 = () => {
  const [open, setOpen] = useState(false)
  const [path, setPath] = useState(false)
  const [delap, setDelap] = useState("put")
  const [fogu, setFogu] = useState("nam")
  const [bami, setBami] = useState("cup")
  const [dogu, setDogu] = useState("flat")
  const [femi, setFemi] = useState("lol")
  const [debi, setDebi] = useState("vum")

  return (
    <div>
      {/* mobile padding: p-4, larger screens: md:p-20 */}
      <div
        className="flex items-center justify-center p-4 md:p-20 "
        style={{
          background: `url(${fullhero})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        {/* main container: column on mobile, row on md+ */}
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-6">

          {/* Card 1 (left on md, top on mobile) */}
          <div className="flex flex-col md:flex-row w-full md:w-1/2 items-center md:items-start justify-center gap-6 p-4">
            <img
              className="w-full md:w-[200px] h-auto md:h-[200px] object-contain"
              src={memeber2}
              alt="member"
            />

            <div className="flex flex-col w-full md:w-[400px] h-auto items-center md:items-start justify-center gap-[20px]">
              <div className="flex flex-col items-center md:items-start">
                <h1
                  onClick={() => setOpen(!open)}
                  style={{ color: open ? "purple" : "white" }}
                  className="text-white text-[30px] font-bold"
                >
                  Taylor R.Miller
                </h1>
                <h5 className="text-white">Speaker</h5>
              </div>

              <div className="text-white text-center md:text-left w-full md:w-[300px]">
                <p>
                  Completey conceplua high quality <br /> nice markes rather than long term <br /> impact human capital
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-[10px] w-full md:w-[300px]">
                <div>
                  {delap === "put" ? (
                    <img
                      onMouseLeave={() => setDelap("put")}
                      onMouseEnter={() => setDelap("put1")}
                      className="w-[20px] h-[20px] object-contain"
                      src={instagram}
                      alt=""
                    />
                  ) : delap === "put1" ? (
                    <img
                      onMouseLeave={() => setDelap("put")}
                      className="w-[20px] h-[20px] object-contain"
                      src={group}
                      alt=""
                    />
                  ) : null}
                </div>

                <div>
                  {fogu === "nam" ? (
                    <img
                      onMouseLeave={() => setFogu("nam")}
                      onMouseEnter={() => setFogu("nam1")}
                      className="w-[20px] h-[20px] object-contain"
                      src={twitter}
                      alt=""
                    />
                  ) : fogu === "nam1" ? (
                    <img
                      onMouseLeave={() => setFogu("nam")}
                      className="w-[20px] h-[20px] object-contain"
                      src={group}
                      alt=""
                    />
                  ) : null}
                </div>

                <div>
                  {bami === "cup" ? (
                    <img
                      onMouseLeave={() => setBami("cup")}
                      onMouseEnter={() => setBami("cup1")}
                      className="w-[20px] h-[20px] object-contain"
                      src={facebook}
                      alt=""
                    />
                  ) : bami === "cup1" ? (
                    <img
                      onMouseLeave={() => setBami("cup")}
                      className="w-[20px] h-[20px] object-contain"
                      src={group}
                      alt=""
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (right on md, below on mobile) */}
          <div className="flex flex-col md:flex-row w-full md:w-1/2 items-center md:items-start justify-center gap-6 p-4">
            <img
              className="w-full md:w-[200px] h-auto md:h-[200px] object-contain"
              src={member3}
              alt="member"
            />

            <div className="flex flex-col w-full md:w-[400px] h-auto items-center md:items-start justify-center gap-[20px]">
              <div className="flex flex-col items-center md:items-start">
                <h1
                  onClick={() => setPath(!path)}
                  style={{ color: path ? "purple" : "white" }}
                  className="text-white text-[30px] font-bold"
                >
                  Taylor R.Miller
                </h1>
                <h5 className="text-white">Speaker</h5>
              </div>

              <div className="text-white text-center md:text-left w-full md:w-[300px]">
                <p>
                  Completey conceplua high quality <br /> nice markes rather than long term <br /> impact human capital
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-[10px] w-full md:w-[300px]">
                <div>
                  {dogu === "flat" ? (
                    <img
                      onMouseLeave={() => setDogu("flat")}
                      onMouseEnter={() => setDogu("flat1")}
                      className="w-[20px] h-[20px] object-contain"
                      src={instagram}
                      alt=""
                    />
                  ) : dogu === "flat1" ? (
                    <img
                      onMouseLeave={() => setDogu("flat")}
                      className="w-[20px] h-[20px] object-contain"
                      src={group}
                      alt=""
                    />
                  ) : null}
                </div>

                <div>
                  {femi === "lol" ? (
                    <img
                      onMouseLeave={() => setFemi("lol")}
                      onMouseEnter={() => setFemi("lol1")}
                      className="w-[20px] h-[20px] object-contain"
                      src={twitter}
                      alt=""
                    />
                  ) : femi === "lol1" ? (
                    <img
                      onMouseLeave={() => setFemi("lol")}
                      className="w-[20px] h-[20px] object-contain"
                      src={group}
                      alt=""
                    />
                  ) : null}
                </div>

                <div>
                  {debi === "vum" ? (
                    <img
                      onMouseLeave={() => setDebi("vum")}
                      onMouseEnter={() => setDebi("vum1")}
                      className="w-[20px] h-[20px] object-contain"
                      src={facebook}
                      alt=""
                    />
                  ) : debi === "vum1" ? (
                    <img
                      onMouseLeave={() => setDebi("vum")}
                      className="w-[20px] h-[20px] object-contain"
                      src={group}
                      alt=""
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sec6
// ...existing code...z