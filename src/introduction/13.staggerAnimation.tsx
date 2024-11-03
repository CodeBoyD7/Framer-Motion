import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StaggerAnimation: React.FC = () => {
  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-[#0d1017] text-white"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          className="w-36 h-36 rounded-full bg-yellow-500 bg-opacity-20 backdrop-blur-lg shadow-lg flex justify-center items-center text-2xl text-center mt-8"
          key={index}
          variants={childVariants}
        >
          {/* Optional content inside the box */}
          Box {index + 1}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerAnimation;
