import { motion } from "framer-motion";

const Component = () => {
  const SLIDE_DURATION = 0.6;
  const SLIDE_DELAY = 0.2;
  return (
    <div className="overflow=y-hidden w-auto min-w-[916px] h-auto grid grid-cols-2 gap-y-[15px] gap-x-[20px]">
      <motion.img
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: SLIDE_DELAY, duration: SLIDE_DURATION }}
        src="/flaunt.png"
        className=" rounded-[30px] col-span-2"
        alt="img-1"
      />
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: SLIDE_DELAY, duration: SLIDE_DURATION }}
        src="/badges.png"
        className=" rounded-[30px] "
        alt="img-1"
      />
      <motion.img
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: SLIDE_DELAY, duration: SLIDE_DURATION }}
        src="/findYourFit.png"
        alt="img-1"
        className=" rounded-[30px] "
      />
    </div>
  );
};

export default Component;
