"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Box = () => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <motion.button
        layout
        transition={{ delay: 1 }}
        onClick={handleClick}
        className="px-4 py-2 rounded-md bg-slate-600 text-white"
      >
        {isHidden ? "Hide" : "Show"}
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isHidden && (
          <motion.div
            initial={{ rotate: 0, scale: 0, opacity: 0 }}
            whileInView={{ rotate: 360, scale: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "backInOut",
            }}
            exit={{ rotate: 0, scale: 0, opacity: 0 }}
            className=" size-[150px] bg-slate-200"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Box;
