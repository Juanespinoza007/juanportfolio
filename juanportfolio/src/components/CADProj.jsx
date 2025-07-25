import React from 'react';
import { useNavigate } from 'react-router-dom';
import STKAI from "../assets/stkaiPhoto.png";
import Section from './Section';
import CADclip from "../assets/videos/metaquest-holder.mp4";

export default function CADProj() {
    const navigate = useNavigate();

  React.useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  // This component is similar to STKAIProj, but tailored for the CAD project to showcase the CAD-related work.
  return (
    <div className="p-8">
      <button
        onClick={() => navigate('/#projects')}
        className="w-fit px-6 ml-auto bg-[#FFF5EA] border-[#FFF5EA] border-2 text-black 
        rounded-lg text-center text-md py-2 hover:bg-transparent hover:text-[#FFF5EA] duration-300 mb-4 ease-in-out"
      >
        &lt; Back
      </button>
      <div className="max-w-4xl mx-auto">
        <Section>
          <video
            src={CADclip}
            autoPlay
            loop
            muted
            playsInline
            className="h-[500px] w-full object-cover object-center mb-6 rounded-lg shadow-lg opacity-0 animate-fadeIn"
          />
        </Section>
        <Section delay={0.3}>
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Meta Quest 3 Holder</h2>
          <div className="w-4/5 mx-auto border-b-2 pt-1 mb-6 border-b-white/10"></div>

        </Section>
        <Section delay={0.7}>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded shadow-md border border-gray-200 text-white">
            <p className="mb-0 text-center">
              This project is a custom-designed wall-mounted holder for the Meta Quest 3, created to provide quick and convenient access to the headset during frequent use in my AR development projects. The holder allows for seamless charging while keeping the device safely off surfaces, and its sleek, clean design adds a modern touch to the workspace, combining functionality with aesthetics.
            </p>
          </div>
        </Section>
        <Section delay={1.0}>
          <div className="mt-12 text-center text-white text-lg italic">
            More coming soon...
          </div>
        </Section>
      </div>
    </div>
  );
}