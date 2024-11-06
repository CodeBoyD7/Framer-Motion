import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
const UseMotionValue = () => {
  const x = useMotionValue(0);

  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation started on x", x.get());
  });

  useMotionValueEvent(x, "change", () => {
    console.log("x changed to ", x.get());
  });
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 200, top: 0, bottom: 200 }}
      className="w-32 h-32 bg-red-500"
      style={{ x }}
    />
  );
};
export default UseMotionValue;
