import { motion } from "framer-motion";

export default function MotionX({ delay, children, right, cls } : { delay: number, children: React.ReactNode, right?: boolean, cls?: string }) {
  const xAxis = right ? 150 : -150;
  return (
    <motion.div
      className={cls ? cls : ""}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: delay,
          bounce: 0.5,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      initial={{ opacity: 0, x: xAxis }}
    >
      {children}
    </motion.div>
  );
}
