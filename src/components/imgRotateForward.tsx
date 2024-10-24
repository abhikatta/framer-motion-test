import React from "react";
import { motion } from "framer-motion";
const ImgRotateForward = () => {
  return (
    <div className=" flex justify-center flex-col">
      <motion.img src="/img.png" className="w-[50%] object-contain" />
      <motion.img src="/img.png" className="w-[50%] object-contain" />
      <motion.img src="/img.png" className="w-[50%] object-contain" />
    </div>
  );
};

export default ImgRotateForward;
