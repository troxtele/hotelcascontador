/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const viewRef = useRef<HTMLDivElement | null>(null);
  const getOpacity = useMotionValue(0);

  const opacity = useTransform(
    getOpacity,
    [0, 0.15, 0.25, 0.5, 0.9, 1],
    [0, 0.25, 1, 1, 0.05, 0]
  );

  const { scrollY } = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const elementOffsetTop =
        viewRef.current !== null ? viewRef.current.offsetTop : 0;
      const elementHeight =
        viewRef.current !== null ? viewRef.current.offsetHeight : 0;

     
      const distance = scrollTop + viewportHeight - elementOffsetTop;
      const percentage =
        Math.round(distance / ((viewportHeight + elementHeight) / 100)) / 100;

      getOpacity.set(percentage);
    });
  }, [scrollY]);

  return (
    <motion.div ref={viewRef} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
