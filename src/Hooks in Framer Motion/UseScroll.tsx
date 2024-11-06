import { motion, useScroll, useTransform } from "framer-motion";

const UseScroll = () => {
  const { scrollY } = useScroll(); // Gets scroll position (in pixels)

  // Interpolating scrollY to scale, opacity, and rotation
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]); // Scale from 1 to 1.5 as we scroll
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Opacity from 1 to 0 as we scroll
  const rotate = useTransform(scrollY, [-1000, 1000], [0, 360]); // Rotate from 0° to 360° as we scroll

  return (
    <div className="flex flex-col justify-center items-center h-[200vh]">
      {/* Scrollable content area */}
      <motion.div
        className="h-80 w-80 bg-red-500"
        style={{
          scale, // Apply scale from scroll
          opacity, // Apply opacity from scroll
          rotate, // Apply rotation from scroll
        }}
      />

      {/* A list of items to simulate scrolling content */}
      <ul className="mt-6 space-y-4">
        {[...Array(20)].map((_, index) => (
          <li key={index} className="text-xl">
            Item {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseScroll;
