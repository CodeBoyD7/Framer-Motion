import { motion, useMotionValue, useTransform } from "framer-motion";

const DraggableColorBox = () => {
  // Create motion value for x-axis
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Use useTransform to change the backgroundColor based on x-axis motion
  const backgroundColor = useTransform(y, [-10, 10], ["#ff0000", "#00ff00"]);

  // Force the style to be directly applied, converting the motionValue to CSS value
  return (
    <motion.div
      drag
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
      style={{
        backgroundColor: backgroundColor, // Motion value is directly assigned
        y, // Motion value for x-axis
        width: "200px",
        height: "200px",
        border: "2px solid black",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white", // White text for contrast
        fontSize: "20px",
      }}
    >
      Drag Me
    </motion.div>
  );
};

export default DraggableColorBox;
