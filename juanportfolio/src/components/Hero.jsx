import React from "react";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LinkedIn from "../assets/linkedInIcon.png";
import gitHub from "../assets/github.png";
import downArrow from "../assets/downArrow2.png"; // import the arrow
import "../styles/hero.css";
function Hero() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(
    () => {
      const titles = gsap.utils.toArray("p");
      const tl = gsap.timeline({repeat: -1});
      titles.forEach((title) => {
        tl.from(title, {
          opacity: 0,
          y: 15,
          rotateX: -90,
        }, "<").to(title, {
          opacity: 0,
          y: -15,
          rotateX: 90,
        },"<3");
      });
    },
    { scope: container }
  );

  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA14293.jpg')`,
      }}
    >
      <div className="absolute bottom-1/3 left-0 px-4 p-8 max-w-[75%] text-left left-[12.5%] pl-0">
        <p className="text-[#FFF5EA] font-semibold text-3xl sm:text-4xl leading-tight">
          Hi,
        </p>
        <h1 className="text-[#FFF5EA] font-semibold md:text-[4rem] xl:text-[5rem] break-words leading-tight">
          <span className="text-3xl sm:text-4xl md:text-[3rem]">I'm </span>
          <span className="font-orbitron text-3xl sm:text-4xl md:text-[3rem]">Juan Espinoza</span>
        </h1>

        <div
          className="min-h-[10px] text-3xl"
        >
          {/*
            container is now our inline-flex wrapper so the GSAP scope
            stays the same but moves the entire group left/right
          */}
          <div
            ref={container}
            className="container inline-flex flex-wrap text-[#CC5500]"
          >
            {/* rotating titles */}
            <div className="text-wrapper">
              <p className="select-none">Aerospace Engineer</p>
              <p className="select-none">AI Engineer</p>
            </div>
          </div>
        </div>
        <p className="text-[#FFF5EA] text-lg whitespace-normal break-words w-full sm:max-w-[80%] md:max-w-[60%] mt-4">
          Pioneering the space exploration and defense industry with <span className="text-[#CC5500] font-bold">AI</span>.
        </p>
      </div>
      <div className="absolute bottom-32 w-full flex justify-center">
        <img
          src={downArrow}
          alt="Scroll down"
          className="w-8 h-8 animate-bounce-fade"
        />
      </div>
    </div>
  );
}

export default Hero;
