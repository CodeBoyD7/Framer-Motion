import { motion } from "framer-motion";
const Pulsing = () => {
  return (
    <div>
      <motion.div
        animate={{
          scale: [1, 2, 1],
          rotate: [0, -10, 10, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      >
        <span className="text-9xl">💜</span>
      </motion.div>
    </div>
  );
};
export default Pulsing;
