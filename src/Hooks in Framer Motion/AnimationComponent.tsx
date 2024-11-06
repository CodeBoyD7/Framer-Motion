import { motion, useScroll, useTransform } from "framer-motion";

const AnimationComponent = () => {
  const { scrollYProgress } = useScroll(); // Use scrollYProgress to track scroll progress as a value between 0 and 1

  // Map scrollYProgress to scale and borderRadius
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]); // Scale from 1 to 0.5 as you scroll
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Border radius from 0% to 50%

  return (
    <div className="relative h-[200vh] overflow-hidden">
      {/* Image that will animate based on scroll */}
      <motion.img
        src="https://images.unsplash.com/photo-1728408828574-70a460530093?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          scale, // Apply scale transformation
          borderRadius, // Apply border-radius transformation
        }}
      />
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <h1 className="text-white text-4xl">Scroll to Animate</h1>
      </div>
    </div>
  );
};

export default AnimationComponent;
