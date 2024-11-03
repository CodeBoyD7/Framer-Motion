import { motion } from "framer-motion";
const Transformations = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/* <motion.div className="h-32 w-32 bg-red-500" animate={{ x: 100 }} /> */}
      {/* <motion.div className="h-32 w-32 bg-red-500" animate={{ y: 100 }} /> */}

      {/* <motion.div className="h-32 w-32 bg-red-500" animate={{ rotateX: 60 }} /> */}
      {/* <motion.div className="h-32 w-32 bg-red-500" animate={{ rotateY: 60 }} /> */}
      {/* <motion.div className="h-32 w-32 bg-red-500" animate={{ rotate: 20 }} /> */}

      {/* <motion.div className="h-32 w-32 bg-red-500" animate={{ scaleX: 2 }} /> */}
      {/* <motion.div className="h-32 w-32 bg-red-500" animate={{ scaleY: 2 }} /> */}
      {/* <motion.div className="h-32 w-32 bg-red-500" animate={{ scale: 2 }} /> */}

      {/* <motion.div className="h-32 w-32 bg-red-500" animate={{ skewX: 20 }} /> */}
      {/* <motion.div className="h-32 w-32 bg-red-500" animate={{ skewY: 20 }} /> */}
      <motion.div className=" h-32 w-32 bg-red-500" animate={{ skew: 50 }} />
    </div>
  );
};
export default Transformations;
