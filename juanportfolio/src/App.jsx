import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import STKAIProj from "./components/STKAIProj";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from './components/Skills';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiDevpost } from "react-icons/si";
import { MdMailOutline } from "react-icons/md";
import {useRef} from 'react';
import {useInView} from "framer-motion";
import Navbar from './components/Navbar';
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
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </div>
    </section>
  );
}





export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col gap-y-2 bg-black">
            
            <Navbar/>
            
            
            <div className="wrapper" id="home">
              
                <Spline
                  className="spline"
                  scene="https://prod.spline.design/fRo2xPG3RyaqDbVh/scene.splinecode"
                />
              
              <Section>
              <Hero />
              </Section>
            </div>
            
            <div className=" text-[#FFF5EA] py-24 " id="projects">
              <Section>
              <h1 className=" text-4xl text-center ">Projects</h1>
              <div className="w-4/5 mx-auto border-b-2 pt-4 border-b-white/10"></div>
              <p className="text-center pt-3 px-6 sm:px-0">
                A few of my recent projects to showcase my skills.
              </p>
              </Section>
            <div>
                <Skills/>
            </div>
              <Projects />
            </div>
            
            <div className="text-[#FFF5EA] py-24" id="aboutMe">
              <Section>
              <h1 className=" text-4xl text-center ">About Me</h1>
              <div className="w-4/5 mx-auto border-b-2 pt-4 border-b-white/10" />
              </Section>
              <AboutMe />
            </div>
            
            <div className="text-[#FFF5EA] py-24" id="contactMe">
              <Section>
              <h1 className="text-4xl text-center">Contact Me</h1>
              <div className="w-4/5 mx-auto border-b-2 pt-4 border-b-white/10" />
              </Section>
              <Section>
              <div className="flex justify-center pt-8 gap-6">
                <a
                  href="https://www.linkedin.com/in/juanpespino"
                  target="_blank"
                  className=" border-[2px] border-[#FFF5EA] p-4 rounded-full hover:bg-[#FFF5EA] hover:text-black duration-300 ease-in-out"
                >
                  <FaLinkedinIn className="" size={25} />
                </a>
                <a
                  href="https://github.com/Juanespinoza007"
                  target="_blank"
                  className="border-[2px] border-[#FFF5EA] p-4 rounded-full hover:bg-[#FFF5EA] hover:text-black duration-300 ease-in-out"
                >
                  <FiGithub size={25} />
                </a>
                <a
                  href="mailto:espinoza.p.juan@gmail.com"
                  className="border-[2px] border-[#FFF5EA] p-4 rounded-full hover:bg-[#FFF5EA] hover:text-black duration-300 ease-in-out"
                >
                  <MdMailOutline size={25} />
                </a>
              </div>
              </Section>
              <Section>
                
              <Contact />
              
              </Section>
            </div>
            
          </div>
        } />

        <Route path="/STKAIProj" element={<STKAIProj />} />
      </Routes>
    </BrowserRouter>
  );
}
