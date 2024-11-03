import { motion } from "framer-motion";
const Basics = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.div
        className="h-32 w-32 bg-red-500"
        animate={{ x: 300, y: 100 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};
export default Basics;
