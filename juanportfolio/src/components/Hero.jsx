import React from "react";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LinkedIn from "../assets/linkedInIcon.png";
import gitHub from "../assets/github.png";
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
    <div className="hero mt-48">
      <h1
        className="
          text-5xl text-[#FFF5EA] font-semi-bold font-orbitron pt-10 text-center
          md:text-[4rem] md:pt-16 xl:text-[5rem] xl:pt-20
        "
      >
        Juan Espinoza
      </h1>

      <div
        className="
          min-h-[100px] flex justify-center items-center
          font-webFont text-lg whitespace-nowrap
        "
      >
        {/* 
          container is now our inline-flex wrapper so the GSAP scope
          stays the same but moves the entire group left/right 
        */}
        <div
          ref={container}
          className="container inline-flex items-center"
        >

          {/* rotating titles */}
          <div className="text-wrapper ml-2">
            <p className="select-none">Im an Aerospace Engineer</p>
            <p className="select-none">Machine Learning Engineer</p>
            <p className="select-none">Computer Vision Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
