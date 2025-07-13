// /components/Section.jsx
import React, { useRef } from "react";
import { useInView, motion} from "framer-motion";

export default function Section({ children, delay=0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.7,
          delay: delay,
          ease: [0.17, 0.55, 0.55, 1],
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}