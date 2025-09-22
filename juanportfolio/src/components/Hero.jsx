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
      className="hero mt-48 min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA14293.jpg')`,
      }}
    >
      <div className="absolute bottom-0 left-0 p-8">
        <h1
          className="
            text-5xl text-[#FFF5EA] font-semi-bold font-orbitron
            md:text-[4rem] xl:text-[5rem]
          "
        >
          Juan Espinoza
        </h1>

        <div
          className="
            min-h-[100px] text-lg whitespace-nowrap
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
              <p className="select-none">I'm an Aerospace Engineer</p>
              <p className="select-none">Machine Learning Engineer</p>
              <p className="select-none">Computer Vision Engineer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-20 flex justify-center mt-[160px] relative z-10">
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
