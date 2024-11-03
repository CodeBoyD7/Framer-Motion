import { motion } from "framer-motion";
import { useState } from "react";

const Variants = () => {
  const [isOpen, setIsOpen] = useState(false);

  const displayVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.5,
    },
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="flex flex-col justify-center items-center"
      onClick={toggleOpen}
    >
      <p className="text-center mb-4">
        You can customize the variant names in the <code>displayVariants</code>{" "}
        object.
      </p>
      <h1 className="font-bold text-3xl mb-2">Tap Here</h1>
      <h1 className="animate-bounce font-bold text-3xl mb-10">👇</h1>
      <motion.div
        className="h-32 w-32 bg-red-500 z-10"
        variants={displayVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit"
      />
    </div>
  );
};

export default Variants;
