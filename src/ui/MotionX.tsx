import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MotionX({ children }: { children: React.ReactNode }) {
  // const [translateX, setTranslateX] = useState(200);
  const [animation, setAnimation] = useState({});

  const [translateX, setTranslateX] = useState(200);
  const viewRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.on("change", (current) => {
    
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const elementOffsetTop =
        viewRef.current !== null ? viewRef.current.offsetTop : 0;
      const elementHeight =
        viewRef.current !== null ? viewRef.current.offsetHeight : 0;

      const distance = scrollTop + viewportHeight - elementOffsetTop;
      const percentage = Math.round(
        distance / ((viewportHeight + elementHeight) / 100)
      );

      if (scrollY.getPrevious() > current) {
        setTranslateX(200);
        setAnimation({ transition: "all 0.3s ease" });
      }
      if (scrollY.getPrevious() < current) {
        setTranslateX(-200);

        if (percentage > 70 && percentage < 120) {
          setAnimation({
            transform: `translateX(${-percentage / 1.75}px)`,
            opacity: 1.3 - percentage / 100,
            transition: "all 0.3s ease",
          });
        }
      }
    });
  }, [scrollY]);

  return (
    <motion.div
      ref={viewRef}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          delay: 0.3,
          bounce: 0.5,
          ease: "easeOut",
        },
      }}
      initial={{ opacity: 0, x: translateX }}
    >
      <div style={animation}>{children}</div>
    </motion.div>
  );
}
