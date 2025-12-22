import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import ApophisImage1 from "../assets/ApophisImage1.png";
import ApophisImage2 from "../assets/ApophisImage2.png";
import ApophisImage3 from "../assets/ApophisImage3.png";


export default function CADProj() {
    const navigate = useNavigate();

  const [ApophisIndex, setApophisIndex] = React.useState(0);
  const ApophisImages = [ApophisImage1, ApophisImage2, ApophisImage3];

  React.useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-8">

      {/* Back button to navigate to the projects section */}
      <button
        onClick={() => navigate('/#projects')}
        className="w-fit px-6 ml-auto bg-white border-white border-2 text-black 
        rounded-lg text-center text-md py-2 hover:bg-transparent hover:text-white duration-300 mb-4 ease-in-out"
      >
        &lt; Back
      </button>

      {/* Project Section */}
      <div className="py-0">
        <Section>
          <div className="relative w-full mb-6 rounded-lg shadow-lg overflow-hidden">
            <img
              src={ApophisImages[ApophisIndex]}
              alt={`Mission to Asteroid Apophis ${ApophisIndex + 1}`}
              className="w-full aspect-video object-cover object-center transition-opacity duration-500"
            />
            <button
              onClick={() => setApophisIndex((ApophisIndex - 1 + ApophisImages.length) % ApophisImages.length)}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 text-white px-3 py-1 rounded-full hover:bg-white/70 duration-300"
            >
              &#8592;
            </button>
            <button
              onClick={() => setApophisIndex((ApophisIndex + 1) % ApophisImages.length)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 text-white px-3 py-1 rounded-full hover:bg-white/70 duration-300"
            >
              &#8594;
            </button>
          </div>
        </Section>
        <Section>
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Mission to Asteroid Apophis</h2>
          <div className="w-4/5 mx-auto border-b-2 pt-1 mb-6 border-b-white/10"></div>
          <h3 className="text-xl font-bold text-white mb-2 text-center">Senior Design Project</h3>

        </Section>
        <Section>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded shadow-md border border-gray-200 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-center">Trajectory & DSN Communication Design</h3>
              <p className="mb-4">
                As part of my senior design at Virginia Tech, I contributed to the trajectory design and communication system analysis for a sample-return mission to Asteroid 99942 Apophis.
              </p>
              <p className="mb-4">
                Apophis is a 340-meter diameter asteroid currently orbiting the sun with a closest proximity distance to Earth of 30,000 km (MEO). The mission involves a multi-year flight path to insert a spacecraft into a parking orbit around Apophis, perform scientific mapping, 
                and return a sample capsule to Earth following the asteroid's Earth flyby.
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Trajectory & STK Modeling</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Modeled a 414-day outbound transit and a 13.86 km/s total ΔV budget using STK.</li>
                    <li>Optimized orbital insertion to reach the target one year prior to its 2029 Earth flyby.</li>
                    <li>Designed the Sample Return Capsule (SRC) re-entry trajectory for precise landing in UTTR.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">DSN Communications</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Designed dual-band (X/Ka) communication links for global coverage via NASA's Deep Space Network.</li>
                    <li>Configured SDST and TWTA hardware to support 850 kbps science data rates.</li>
                    <li>Established requirements for 1 TB of onboard storage with radiation-tolerant bit-flip protection.</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-4 text-xs text-gray-300 text-center italic">
                Tools: STK (Systems Tool Kit), DSN Link Budgeting
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}