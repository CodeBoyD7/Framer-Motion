import { motion } from "framer-motion";
const BouncingLoader = () => {
  return (
    <div className="flex justify-center items-center space-x-4 bg-purple-700 h-16 w-40 rounded-lg ">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-3  rounded-full bg-white"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};
export default BouncingLoader;
