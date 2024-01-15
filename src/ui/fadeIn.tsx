import { motion } from "framer-motion";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.3,
          bounce: 0.5,
          ease: "easeOut",
        },
      }}
      initial={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
