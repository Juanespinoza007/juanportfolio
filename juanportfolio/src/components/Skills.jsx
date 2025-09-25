import React from 'react'
import { motion } from 'framer-motion';

function Skills() {

  const skills = ["Astrodynamics", "Orbital Mechanics", "Control Systems", "Hypersonic Flow", "Avionics", "3D Modeling", "Simulation", "Deep Learning", "Reinforcement Learning", "Computer Vision", "AR/VR Development"]
  const tools = ["SolidWorks", "Fusion 360", "Siemens NX", "MATLAB", "Ansys STK", "Python", "C++", "C#", "PyTorch", "TensorFlow", "OpenCV", "ONNX", "Git", "Pandas", "Unity"]

  return (
    <div className='mx-auto flex flex-wrap gap-2 text-[#FFF5EA] max-w-[50rem] px-5 py-7 sm:py-20'>
      <h2 className='w-full'>Skills:</h2>
      {skills.map((s, i) => (
        <motion.div
          key={s}
          initial="hidden"
          className='grow select-none rounded-lg bg-[#CC5500]/50 px-6 py-2 text-center'
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.2 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 100 }
          }}
        >
          {s}
        </motion.div>
      ))}

      <h2 className='w-full mt-8'>Tools:</h2>
      {tools.map((t, i) => (
        <motion.div
          key={t}
          initial="hidden"
          className='grow select-none rounded-lg bg-[#CC5500]/50 px-6 py-2 text-center'
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.2 }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: 100 }
          }}
        >
          {t}
        </motion.div>
      ))}
    </div>
  )
}

export default Skills