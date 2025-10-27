// ...existing code...
import React from 'react'
import img1 from "../assets/img1.jpg"
import fullhero from "../assets/fullhero.jpg"
import playbutton from "../assets/playbutton.png"

const Sec2 = () => {
  return (
    <div className="flex flex-col">
      {/* made this container relative so absolute children are contained */}
      <div
        className="relative flex items-center justify-center h-screen w-[100%]"
        style={{
          background: `url(${fullhero})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        {/* image uses max-width / max-height so it cannot force overflow */}
        <img
          className="max-w-full max-h-[80vh] object-contain"
          src={img1}
          alt=""
        />

        {/* overlay centered with absolute inset-0 — no large w/h that can overflow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://www.youtube.com/watch?v=fnPxkuFIA48&list=RDfnPxkuFIA48&start_radio=1"
            className="z-10"
          >
            <img
              src={playbutton}
              alt="play"
              className="w-16 h-16 sm:w-20 sm:h-20 animate-pulse"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sec2
// ...existing code...