import { motion, useMotionValue } from "framer-motion";
import { ChangeEvent } from "react";

const RangeSlider = () => {
  const scale = useMotionValue(1);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    scale.set(parseFloat(e.target.value));

  return (
    <div>
      <motion.button className="h-32 w-32 bg-red-500" style={{ scale }} />

      <div className="mt-[6rem]">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
