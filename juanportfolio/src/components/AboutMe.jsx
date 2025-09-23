import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { IoSchoolSharp } from "react-icons/io5";
import {useRef} from 'react';
import {useInView} from "framer-motion";
import Spline from "@splinetool/react-spline";
import juanPic from '../assets/JuanProfilePic.png';


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

// A simple SVG icon component to avoid installing a library for this one-off use.
const CheckCircle2 = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// New icon for the education section
const GraduationCap = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" />
  </svg>
);

function AboutMe() {
  const degrees = [
    {
      title: 'B.S. Aerospace Engineering',
      school: 'Virginia Tech',
      focus: 'Focus: Astrodynamics, Navigation, Modeling & Simulation',
    },
    {
      title: "Master's Computer Engineering",
      school: 'Virginia Tech',
      focus: 'Focus: Reinforcement Learning, Deep Learning, Computer Vision',
    },
  ];

  const stats = [
    { value: '2+', label: 'Years of Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '2', label: 'Advanced Degrees' },
  ];

  return (
    <div className="text-white font-sans antialiased w-full px-4 sm:px-6 lg:px-8 py-0">
      <div className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl p-8 md:p-12">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Left Column: Image & Timeline */}
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="flex-shrink-0 mb-8">
                {/* IMPORTANT: Replace this placeholder URL with the actual path to your image. */}
                <img
                  src={juanPic}
                  alt="Juan Espinoza"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-600 shadow-lg"
                />
              </div>

              {/* Vertical Education Timeline */}
              <div className="w-full max-w-xs relative border-l-2 border-[#CC5500]/50">
                <div className="space-y-8">
                  {[...degrees].reverse().map((degree, index) => (
                    <div key={index} className="pl-10 relative">
                      <div className="absolute -left-[1.1rem] top-1 flex items-center justify-center bg-[#1F2937] rounded-full">
                        <div className="h-8 w-8 bg-[#CC5500] rounded-full flex items-center justify-center ring-8 ring-[#CC5500]/20">
                          <GraduationCap className="h-4 w-4 text-[#111827]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{degree.title}</h4>
                        <p className="text-gray-400 text-sm mt-1">{degree.school}</p>
                        <p className="text-gray-500 text-xs mt-2 uppercase tracking-wider">{degree.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Bio Text & Stats */}
            <div className="md:col-span-2 text-center md:text-left">
              <p className="text-gray-400 leading-relaxed">
                Artificial intelligence is transforming the aerospace industry from its past reliance on ground-commanded operations and slow data analysis into a future defined by autonomous, deep-space decision-making and predictive discovery.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                My expertise at the intersection of aerospace principles and machine learning is focused on accelerating this transition, building the intelligent systems that will replace the limitations of the past with the possibilities of tomorrow.
              </p>

              {/* Stats Section */}
              <div className="border-t border-gray-700 pt-8 mt-12">
                <div className="grid grid-cols-3 sm:gap-8 sm:text-center">
                  {stats.map((stat, index) => (
                    <div key={index} className="px-4">
                      <p className="text-4xl font-bold text-[#CC5500] mb-2">{stat.value}</p>
                      <p className="text-gray-400 text-sm uppercase tracking-wider text-center">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
