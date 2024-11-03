import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    if (isFlipped) {
      setInterval(() => {
        setIsFlipped(!isFlipped);
      }, 2000);
    }
  }, [isFlipped]);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <motion.div
      onClick={toggleFlip}
      className=" bg-white rounded-lg overflow-hidden transform-style-preserve-3d"
      variants={cardVariants}
      initial="front"
      animate={isFlipped ? "back" : "front"}
      transition={{ delay: 0.5, ease: "easeInOut" }}
    >
      {!isFlipped ? (
        <img src="/sam-front.png" alt="front" />
      ) : (
        <img src="/sam-back.png" alt="front" />
      )}
    </motion.div>
  );
};

export default FlippingCard;
