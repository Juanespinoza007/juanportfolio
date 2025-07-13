import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import quadcopter from "../assets/quadcopterPhoto.png";
import apophis from "../assets/missionApophisPhoto.png";
import unityIcon from "../assets/UnityPhoto.png";
import pythonIcon from "../assets/pythonIcon.png";
import AR from "../assets/arInventoryPhoto.png";
import STK from "../assets/stkPhoto.png";
import MATLAB from "../assets/matlabPhoto.png";
import reactIcon from "../assets/bestReactIcon.png";
import nodeIcon from "../assets/node.jsIcon.png";
import tailwindIcon from "../assets/tailwindIcon.png";
import openAiIcon from "../assets/openAiIcon.png";
import ReactCardFlip from "react-card-flip";
import { HiOutlineLink } from "react-icons/hi";
import jsIcon from "../assets/javascriptIcon.png";
import htmlIcon from "../assets/htmlIcon.png";
import mongoIcon from "../assets/mongoIcon.png";
import booked from "../assets/bookedPhoto.png";
import STKAI from "../assets/stkaiPhoto.png";
import { useRef } from "react";
import { useInView } from "framer-motion";


import "../styles/project.css";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function Projects() {
  const navigate = useNavigate();
  const [flip, isFlipped] = useState(false);
  const [flip2, isFlipped2] = useState(false);
  const [flip3, isFlipped3] = useState(false);
  const [flip4, isFlipped4] = useState(false);
  const [flip5, isFlipped5] = useState(false);
  const [flip6, isFlipped6] = useState(false);

  function flipCard() {
    isFlipped(!flip);
  }
  function flipCard2() {
    isFlipped2(!flip2);
  }
  function flipCard3() {
    isFlipped3(!flip3);
  }
  function flipCard4() {
    isFlipped4(!flip4);
  }
  function flipCard5() {
    isFlipped5(!flip5);
  }
  function flipCard6() {
    isFlipped6(!flip6);
  }
  // Fix the width for the cards at small screens
  return (
    <div className="grid grid-cols-1 pt-10 place-items-center md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 xl:gap-y-28 lg:gap-y-20 gap-5 px-5 sm:px-0">
      {/* STK AI */}
      <Section>
        <div className=" bg-transparent border-[#FFF5EA] border-2 max-w-[450px] h-fit rounded-lg">
          <h1 className="text-center text-3xl py-4">AI Satellite Reconfiguration</h1>
          <ReactCardFlip isFlipped={flip6} flipDirection="horizontal">
            <img
              src={STKAI}
              className="h-[380px] w-[450px] border-black border-2 hover:border-[#FFF5EA] duration-300 ease-in-out object-cover object-center rounded-b-lg"
              onClick={flipCard6}
            />
            <div
              onClick={flipCard6}
              className="h-[380px] bg-[#2a2a2b] rounded-b-lg p-7 sm:p-10 flex flex-col justify-center items-center gap-5"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                <ul className=" list-none flex items-center justify-center gap-5">
                  <li className="skill">
                    <img src={STK} className="h-11" />
                    <p>Ansys STK</p>
                  </li>
                  <li className="skill">
                    <img src={MATLAB} className="h-11" />
                    <p>MATLAB</p>
                  </li>
                  <li className="skill">
                    <img src={pythonIcon} className="h-11" />
                    <p>Python</p>
                  </li>
                </ul>
              </div>
              <p className=" text-center">
                An AI-powered simulation that uses reinforcement learning and STK to autonomously reconfigure satellite 
                constellations in real orbital environments for improved ground coverage and mission responsiveness.
                </p>
              <p className=" text-center">
                In Developement
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/STKAIProj');
                }}
                className="w-fit px-3 bg-[#FFF5EA] border-[#FFF5EA] border-2 text-black 
                rounded-lg text-center py-2 hover:bg-transparent hover:text-[#FFF5EA] duration-300 ease-in-out"
              >
                More Details
              </button>
            </div>
          </ReactCardFlip>
        </div>
      </Section>
      {/* Quadcopter AI */}
      <Section>
        <div className=" bg-transparent border-[#FFF5EA] border-2 max-w-[450px] h-fit rounded-lg">
          <h1 className="text-center text-3xl py-4">Quadcopter AI</h1>
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <img
              src={quadcopter}
              className="h-[380px] w-[450px] border-black border-2 hover:border-[#FFF5EA] duration-300 ease-in-out object-cover object-center rounded-b-lg"
              onClick={flipCard}
            />
            <div
              onClick={flipCard}
              className="h-[380px] bg-[#2a2a2b] rounded-b-lg p-7 sm:p-10 flex flex-col justify-center items-center gap-10"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                {/* <h2 className="text-center text-2xl">Tools:</h2> */}
                <ul className=" list-none flex items-center justify-center gap-1 sm:gap-5 md:gap-3 lg:gap-5" >
                  <li className="skill">
                    <img src={unityIcon} className="h-10" />
                    <p className="">Unity</p>
                  </li>
                  <li className="skill">
                    <img src={pythonIcon} className="h-10" />
                    <p>Python</p>
                  </li>
                </ul>
              </div>
              <p className=" text-center">
                A state-of-the-art quadcopter system leveraging Liquid Neural Networks (LTC) to enhance real-time
                navigation and situation awareness
                </p>
            </div>
          </ReactCardFlip>
        </div>
      </Section>
      {/* AR Counting app */}
      <Section>
        <div className=" bg-transparent border-[#FFF5EA] border-2 max-w-[450px] h-fit rounded-lg">
          <h1 className="text-center text-3xl py-4">AR Inventory Counting</h1>
          <ReactCardFlip isFlipped={flip3} flipDirection="horizontal">
            <img
              src={AR}
              className="h-[380px] w-[450px] border-black border-2 hover:border-[#FFF5EA] duration-300 ease-in-out object-cover object-center rounded-b-lg"
              onClick={flipCard3}
            />
            <div
              onClick={flipCard3}
              className="h-[380px] bg-[#94949b]  rounded-b-lg p-7 sm:p-10 flex flex-col justify-center items-center gap-10"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                <ul className=" list-none flex items-center justify-center gap-1 sm:gap-5 md:gap-2 lg:gap-5">
                  <li className="skill">
                    <img src={unityIcon} className="h-10" />
                    <p className="">Unity</p>
                  </li>
                  <li className="skill">
                    <img src={pythonIcon} className="h-10" />
                    <p>Python</p>
                  </li>
                </ul>
              </div>
              <p className=" text-center  sm:text-base">
                A real-time object detection app for the Meta Quest and Apple Vision Pro, enabling efficient retail
                inventory tracking with a two pass scan while simulating an AR warehouse environment
              </p>
            </div>
          </ReactCardFlip>
        </div>
      </Section>
      {/* booked up */}
      <Section>
        <div className=" bg-transparent border-[#FFF5EA] border-2 max-w-[450px] h-fit rounded-lg">
          <h1 className="text-center text-3xl py-4">Book'd Up</h1>
          <ReactCardFlip isFlipped={flip5} flipDirection="horizontal">
            <img
              src={booked}
              className="h-[380px] w-[450px] border-black border-2 hover:border-[#FFF5EA] duration-300 ease-in-out object-cover object-center rounded-b-lg"
              onClick={flipCard5}
            />
            <div
              onClick={flipCard5}
              className="h-[380px]  bg-[#09316d] rounded-b-lg p-7 sm:p-10 flex flex-col justify-center items-center gap-10"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                <ul className=" list-none flex items-center justify-center gap-1 sm:gap-5 md:gap-2 lg:gap-5">
                  <li className="skill">
                    <img src={reactIcon} className="h-11" />
                    <p>React</p>
                  </li>
                  <li className="skill">
                    <img src={mongoIcon} className="h-11" />
                    <p>MongoDB</p>
                  </li>
                  <li className="skill">
                    <img src={nodeIcon} className="h-11" />
                    <p>Node</p>
                  </li>
                  <li className="skill">
                    <img
                      src={tailwindIcon}
                      className="h-11 w-11 object-contain"
                    />
                    <p>Tailwind</p>
                  </li>
                </ul>
              </div>
              <p className=" text-center  sm:text-base">
                Booking site simplifying
                personal care appointments, catering not only to barbers but to
                all professionals in the personal care industry (Start-up Dev)
              </p>
              <a
                href="https://bookdup.co"
                target="_blank"
                className="bg-[#105fd3] p-1 px-[10px] pt-2 rounded-full hover:bg-opacity-70 cursor-pointer ease-in-out duration-300"
              >
                <button className="text-center">
                  <HiOutlineLink size={40} className="" />
                </button>
              </a>
            </div>
          </ReactCardFlip>
        </div>
      </Section>
      {/* Mision Apophis */}
      <Section>
        <div className=" bg-transparent border-[#FFF5EA] border-2 max-w-[450px] h-fit rounded-lg">
          <h1 className="text-center text-3xl py-4">Mission to Apophis</h1>
          <ReactCardFlip isFlipped={flip2} flipDirection="horizontal">
            <img
              src={apophis}
              className="h-[380px] w-[450px] border-black border-2 hover:border-[#FFF5EA] duration-300 ease-in-out object-cover object-center rounded-b-lg"
              onClick={flipCard2}
            />
            <div
              onClick={flipCard2}
              className="h-[380px] bg-[#222224] rounded-b-lg p-10 flex flex-col justify-center items-center gap-10"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                <ul className=" list-none flex items-center justify-center gap-5">
                  <li className="skill">
                    <img src={STK} className="h-11" />
                    <p>Ansys STK</p>
                  </li>
                  <li className="skill">
                    <img src={MATLAB} className="h-11" />
                    <p>MATLAB</p>
                  </li>
                  <li className="skill">
                    <img src={pythonIcon} className="h-11" />
                    <p>Python</p>
                  </li>
                </ul>
              </div>
              <p className=" text-center">
                Orbital trajectory design for a spacecraft mission to asteroid Apophis, focused on gathering seismic and
                compositional data. Modeled Deep Space Network (DSN) communications using Ansys STK, optimizing real-time mission
                planning.
              </p>
            </div>
          </ReactCardFlip>
        </div>
      </Section>
      {/* incoming */}
      <Section>
        <div className=" bg-white/10 text-[#fff5ea93] max-w-[450px] h-fit rounded-lg">
          <h1 className="text-center text-3xl py-4">More coming...</h1>
          
            <div
              
              className="h-[380px] rounded-b-lg p-7 sm:p-10 flex flex-col justify-center items-center gap-7"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                <ul className=" list-none flex items-center justify-center gap-1 sm:gap-5 md:gap-2 lg:gap-5">                  
                </ul>
              </div>
              <p className=" text-center  sm:text-base px-14">
                There are more ideas brewing, stay tuned!
              </p>
              {/* <a
                href="https://github.com/Book-dUp/Book-dUpWebsite"
                target="_blank"
                className="bg-[#105fd3] p-1 px-[10px] pt-2 rounded-full hover:bg-opacity-70 cursor-pointer ease-in-out duration-300"
              >
                <button className="text-center">
                  <HiOutlineLink size={40} className="" />
                </button>
              </a> */}
            </div>
          
        </div>
      </Section>
    </div>
  );
}

export default Projects;
