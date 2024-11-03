import { motion } from "framer-motion";
const KeyFrames = () => {
  return (
    <div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 3, 2, 2, 1, 1],
          rotate: [0, 180, 180, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
        className="w-32 h-32 bg-red-500"
      />
    </div>
  );
};
export default KeyFrames;
