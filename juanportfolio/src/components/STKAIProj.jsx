import React from 'react';
import { useNavigate } from 'react-router-dom';
import STKAI from "../assets/stkaiPhoto.png";
import Section from './Section';

export default function STKAIProj() {
    const navigate = useNavigate();

  React.useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

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
          <img
            src={STKAI}
            className="h-[300px] w-full object-cover object-center mb-6 rounded-lg shadow-lg"
          />
        </Section>
        <Section delay={0.3}>
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Autonomous Satellite Reconfiguration using Reinforcement Learning and Machine Learning</h2>
          <div className="w-4/5 mx-auto border-b-2 pt-1 mb-1 border-b-white/10"></div>
          <h3 className="text-xl font-bold text-white mb-6 text-center">In Developement</h3>

        </Section>
        <Section delay={0.7}>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded shadow-md border border-gray-200 text-white">
            <p className="text-xl mb-4 text-center">Project Proposal</p>
            <p className="mb-4 text-center">
              This project aims to build an AI-powered system capable of autonomously reconfiguring satellite constellations to optimize coverage and responsiveness in dynamic, real-world orbital environments. It leverages AGI STK (Systems Tool Kit) as the high-fidelity simulation platform for modeling orbital mechanics, satellite access, and communication links. STK will be used to simulate LEO or MEO constellations, perform access analyses, and compute maneuver requirements under real physics-based constraints including delta-V budgets and line-of-sight availability.
            </p>
            <p className="mb-4 text-center">
              Reinforcement Learning (RL) will be applied to train an agent that learns optimal reconfiguration policies for satellites based on varying mission objectives such as maximizing ground coverage or minimizing response latency to high-priority regions. The agent will receive state inputs including satellite positions, battery levels, target visibility windows, and environmental conditions, and will output maneuver decisions such as orbital adjustments or task reassignments. Supervised machine learning may be used to predict future demand regions on Earth based on synthetic or historical geospatial data, enabling proactive constellation planning.
            </p>
            <p className="mb-4 text-center">
              This project showcases a blend of astrodynamics, GNC principles, and AI decision-making, with full integration between Python, AGI STK, and machine learning frameworks such as PyTorch or TensorFlow. It demonstrates intelligent autonomy for next-generation space missions—particularly in scenarios where Earth-based control is delayed or infeasible, such as in real-time disaster response, military surveillance, or autonomous satellite networks.
            </p>
            <p className="mt-4">
              <strong>Technologies:</strong> Python, AGI STK, Reinforcement Learning, Astrodynamics, GNC
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}