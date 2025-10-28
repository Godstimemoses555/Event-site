import React, { useState } from 'react'
import fullhero from "../assets/fullhero.jpg"
import members from "../assets/members.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import member5 from "../assets/member5.png"
import group from "../assets/group.png"

const Sec7 = () => {
    const [click, setClick] = useState(false)
    const [dom, setDom] = useState(false)
    const [demo, setDemo] = useState(false)
    const [icontrack, setIconTrack] = useState("inst")
    const [pull, setPull] = useState("twitt")
    const [lamp, setLamp] = useState("face")
    const [bag, setBag] = useState("laff")
    const [dap, setDap] = useState("mam")
    const [hug, setHug] = useState("fill")

    return (
        <div>
            <div
                className="flex items-center justify-center p-4 md:p-20"
                style={{
                    background: `url(${fullhero})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-6">

                    {/* Card 1 - stack on mobile */}
                    <div className="flex flex-col md:flex-row w-full md:w-1/2 items-center md:items-start justify-center gap-6 p-4 bg-transparent">
                        <img
                            className="w-full md:w-[200px] h-auto md:h-[200px] object-contain"
                            src={members}
                            alt="member"
                        />

                        <div className="flex flex-col w-full md:w-[400px] items-center md:items-start text-center md:text-left gap-3">
                            <div>
                                <h1
                                    onClick={() => setClick(!click)}
                                    style={{ color: click ? "purple" : "white" }}
                                    className="text-white text-[30px] font-bold"
                                >
                                    Taylor R.Miller
                                </h1>
                                <h5 className="text-white">Speaker</h5>
                            </div>

                            <div className="text-white text-sm">
                                <p>
                                    Completey conceplua high quality <br /> nice markes rather than long term <br /> impact human capital
                                </p>
                            </div>

                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <div>
                                    {bag === "laff" ? (
                                        <img
                                            onMouseLeave={() => setBag("laff")}
                                            onMouseEnter={() => setBag("laff1")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={instagram}
                                            alt="instagram"
                                        />
                                    ) : bag === "laff1" ? (
                                        <img
                                            onMouseLeave={() => setBag("laff")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={group}
                                            alt="group"
                                        />
                                    ) : null}
                                </div>

                                <div>
                                    {dap === "mam" ? (
                                        <img
                                            onMouseLeave={() => setDap("mam")}
                                            onMouseEnter={() => setDap("mam1")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={twitter}
                                            alt="twitter"
                                        />
                                    ) : dap === "mam1" ? (
                                        <img
                                            onMouseLeave={() => setDap("mam")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={group}
                                            alt="group"
                                        />
                                    ) : null}
                                </div>

                                <div>
                                    {hug === "fill" ? (
                                        <img
                                            onMouseLeave={() => setHug("fill")}
                                            onMouseEnter={() => setHug("fill1")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={facebook}
                                            alt="facebook"
                                        />
                                    ) : hug === "fill1" ? (
                                        <img
                                            onMouseLeave={() => setHug("fill")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={group}
                                            alt="group"
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - stack on mobile */}
                    <div className="flex flex-col md:flex-row w-full md:w-1/2 items-center md:items-start justify-center gap-6 p-4 bg-transparent">
                        <img
                            className="w-full md:w-[200px] h-auto md:h-[200px] object-contain"
                            src={member5}
                            alt="member"
                        />

                        <div className="flex flex-col w-full md:w-[400px] items-center md:items-start text-center md:text-left gap-3">
                            <div>
                                <h1
                                    onClick={() => setDom(!dom)}
                                    style={{ color: dom ? "purple" : "white" }}
                                    className="text-white text-[30px] font-bold"
                                >
                                    Taylor R.Miller
                                </h1>
                                <h5 className="text-white">Speaker</h5>
                            </div>

                            <div className="text-white text-sm">
                                <p>
                                    Completey conceplua high quality <br /> nice markes rather than long term <br /> impact human capital
                                </p>
                            </div>

                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <div>
                                    {icontrack === "inst" ? (
                                        <img
                                            onMouseLeave={() => setIconTrack("inst")}
                                            onMouseEnter={() => setIconTrack("inst1")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={instagram}
                                            alt="instagram"
                                        />
                                    ) : icontrack === "inst1" ? (
                                        <img
                                            onMouseLeave={() => setIconTrack("inst")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={group}
                                            alt="group"
                                        />
                                    ) : null}
                                </div>

                                <div>
                                    {pull === "twitt" ? (
                                        <img
                                            onMouseLeave={() => setPull("twitt")}
                                            onMouseEnter={() => setPull("twitt1")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={twitter}
                                            alt="twitter"
                                        />
                                    ) : pull === "twitt1" ? (
                                        <img
                                            onMouseLeave={() => setPull("twitt")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={group}
                                            alt="group"
                                        />
                                    ) : null}
                                </div>

                                <div>
                                    {lamp === "face" ? (
                                        <img
                                            onMouseLeave={() => setLamp("face")}
                                            onMouseEnter={() => setLamp("face1")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={facebook}
                                            alt="facebook"
                                        />
                                    ) : lamp === "face1" ? (
                                        <img
                                            onMouseLeave={() => setLamp("face")}
                                            className="w-[20px] h-[20px] object-contain"
                                            src={group}
                                            alt="group"
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

export default Sec7