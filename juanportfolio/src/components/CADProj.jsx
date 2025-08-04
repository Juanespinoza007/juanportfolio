import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from './Section';
import CADclip from "../assets/videos/metaquest-holder.mp4";
import vtcube1 from "../assets/vtcube1.jpg";
import vtcube2 from "../assets/vtcube2.jpg";
import vtcube3 from "../assets/vtcube3.jpg";

export default function CADProj() {
    const navigate = useNavigate();

  const [vtcubeIndex, setVtcubeIndex] = React.useState(0);
  const vtcubeImages = [vtcube1, vtcube2 , vtcube3];

  React.useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  // This component is similar to STKAIProj, but tailored for the CAD project to showcase the CAD-related work.
  return (
    <div className="p-8">

      {/* Back button to navigate to the projects section */}
      <button
        onClick={() => navigate('/#projects')}
        className="w-fit px-6 ml-auto bg-[#FFF5EA] border-[#FFF5EA] border-2 text-black 
        rounded-lg text-center text-md py-2 hover:bg-transparent hover:text-[#FFF5EA] duration-300 mb-4 ease-in-out"
      >
        &lt; Back
      </button>

      <div className="max-w-4xl mx-auto">
        {/* STKAI Project Section */}
        <div className="pb-24">
        <Section>
          <video
            src={CADclip}
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-video object-cover object-center mb-6 rounded-lg shadow-lg opacity-0 animate-fadeIn"
          />
        </Section>
        <Section delay={0}>
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Meta Quest 3 Wall Mount</h2>
          <div className="w-4/5 mx-auto border-b-2 pt-1 mb-6 border-b-white/10"></div>
        </Section>
        <Section delay={0}>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded shadow-md border border-gray-200 text-white">
            <p className="mb-0 text-center">
              This project is a custom-designed wall-mounted holder for the Meta Quest 3, created to provide quick and convenient access to the headset during frequent use in my AR development projects. The holder allows for seamless charging while keeping the device safely off surfaces, and its sleek, clean oak wood design adds a modern touch to the workspace, combining functionality with aesthetics.
            </p>
          </div>
        </Section>
        </div>

      {/* Virginia Tech Cube Lamp Section */}
      <div className="py-20">
        <Section>
          <div className="relative w-full mb-6 rounded-lg shadow-lg overflow-hidden">
            <img
              src={vtcubeImages[vtcubeIndex]}
              alt={`Virginia Tech Cube Lamp ${vtcubeIndex + 1}`}
              className="w-full aspect-video object-cover object-center transition-opacity duration-500"
            />
            <button
              onClick={() => setVtcubeIndex((vtcubeIndex - 1 + vtcubeImages.length) % vtcubeImages.length)}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
            >
              &#8592;
            </button>
            <button
              onClick={() => setVtcubeIndex((vtcubeIndex + 1) % vtcubeImages.length)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
            >
              &#8594;
            </button>
          </div>
        </Section>
        <Section>
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Virginia Tech Cube Lamp</h2>
          <div className="w-4/5 mx-auto border-b-2 pt-1 mb-6 border-b-white/10"></div>
        </Section>
        <Section>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded shadow-md border border-gray-200 text-white">
            <p className="mb-0 text-center">
            This Virginia Tech style desk lamp was designed during my undergrad at Virginia Tech. 
            It adds a warm, personalized touch to my desk space while showcasing my school pride.
            This 4in cube was designed and rendered in Fusion 360. It was then sliced using Cura, and 
            printed on a AnycubicX 3D printer. Its powered by a simple LED light strip, wound up inside the cube, 
            and controlled by a IR remote.

            </p>
          </div>
        </Section>
        <Section>
          <div className="mt-12 text-center text-white text-lg italic">
            More coming soon...
          </div>
        </Section>
      </div>
    </div>
    </div>
  );
}