import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const viewRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: viewRef,
    offset: ["0 1", "2.5 1"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.5, 0.75, 1],
    [0.25, 1, 1, 0.05
      , 0]
  );

  return (
    <motion.div ref={viewRef} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
