import { motion, useSpring } from "framer-motion";
import { ChangeEvent } from "react";

const UseSpring = () => {
  const scale = useSpring(1);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <motion.button
        className="h-32 w-32 bg-red-500 rounded-full"
        style={{ scale }}
      />

      <input
        type="range"
        min={1}
        max={5}
        step={0.01}
        defaultValue={1}
        onChange={changeHandler}
      />
    </div>
  );
};
export default UseSpring;
