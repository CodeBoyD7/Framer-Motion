import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChangeEvent } from "react";

const ColorChanger = () => {
  const hue = useSpring(0, { stiffness: 300, damping: 30 }); //useMotionValue(0) we can use
  const backgroundColor = useTransform(hue, (h) => `hsl(${h}, 100%, 50%)`);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    hue.set(parseFloat(e.target.value));
  };

  return (
    <div>
      <motion.div
        className=" h-200 w-200 bg-red-500"
        style={{ backgroundColor, width: 200, height: 200, borderRadius: 16 }}
      />
      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          defaultValue={0}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default ColorChanger;
