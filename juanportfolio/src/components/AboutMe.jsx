import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { IoSchoolSharp } from "react-icons/io5";
import {useRef} from 'react';
import {useInView} from "framer-motion";
import Spline from "@splinetool/react-spline";


function Section({children}){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </div>
    </section>
  );
}



function AboutMe() {
  return (
    <div className="flex flex-col lg:pt-32 lg:flex-row lg:gap-1 lg:justify-center items-center px-0 sm:px-10 gap-5 pt-3">
      
      <div className=" w-full h-[50vh] lg:w-2/5 xl:w-[33%]">
        <Spline scene="https://prod.spline.design/Nubb2KU3YmwM4gNz/scene.splinecode" />
      </div>
     
      <div className="flex flex-col gap-5 lg:w-1/2 px-10 sm:px-0">
        <Section>
        <p className="font-medium text-center md:order-last xl:text-lg">
          Hello! I'm Juan Espinoza, an Aerospace and AI Engineer passionate
          about leveraging cutting edge AI tools to create novel aerospace solutions 
          in efforts to advance the space exploration industry.<br/>
          <br/> 
          Currently, I'm diving into developing VR/AR applications for object recognition and user navigation. Through hands-on research and side projects, I sharpen both 
          my aerospace and software skills. I’m on the hunt for opportunities where I can 
          apply that blend of space-grade engineering and AI to push the boundaries of exploration.
        </p>
        </Section>
        <div className="w-full flex flex-col gap-5 md:flex-row md:justify-center items-center">
          
          <div className="max-w-[430px] w-full border-2 rounded-3xl flex flex-col items-center gap-2 py-6">

            <Section><IoSchoolSharp size={40} /></Section>
            <Section><h2 className="text-2xl font-semibold text-center">Master's Computer<br/>Engineering</h2></Section>
            <Section><p className="text-sm opacity-60">Virginia Tech</p></Section>
            <Section><p className="text-sm opacity-60">Focus: AI and Computer Vision</p></Section>
            
          </div>
          
          
          <div className="max-w-[430px] w-full border-2 rounded-3xl flex flex-col items-center gap-2 py-6">
            <Section><IoSchoolSharp size={40} /></Section>
            <Section><h2 className="text-2xl font-semibold text-center">B.S. Aerospace<br/>Engineering</h2></Section>
            <Section><p className="text-sm opacity-60">Virginia Tech</p></Section>
            <Section><p className="text-sm opacity-60 text-center"> Focus: Astrodynamics & Numerical Methods</p></Section>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
