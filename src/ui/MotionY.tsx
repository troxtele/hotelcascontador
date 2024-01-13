import { motion } from "framer-motion";

export default function MotionY({
  delay,
  cls,
  children,
}: {
  delay: number;
  cls?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={cls ? cls : ""}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: delay,
          bounce: 0.5,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: -200 }}
    >
      {children}
    </motion.div>
  );
}
