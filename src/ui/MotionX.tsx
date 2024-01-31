import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MotionX({ children }: { children: React.ReactNode }) {
  const viewRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: viewRef,
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return ( 
    <motion.div
      style={{ translateX }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          delay: 0.5,
          bounce: 0.5,
          ease: "easeOut",
        },
      }}
      initial={{ opacity: 0, x: -200 }}
    >
      {children}
    </motion.div>
  );
}
