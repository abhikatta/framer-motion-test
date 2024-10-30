import { motion } from "framer-motion";

const TextReveal = () => {
  return (
    <div className="w-full min-h-screen h-full flex flex-col justify-center items-center">
      <motion.div>
        <motion.img
          initial={{ position: "absolute", x: 0, y: -21 }}
          whileInView={{ x: 600, y: -300 }}
          transition={{ duration: 1 }}
          src="/logoTop.png"
        />
        <motion.p
          className="max-w-[829px] h-[315px] text-[50px]"
          initial={{ position: "absolute", x: -350, y: -150, scale: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ scale: 1 }}
        >
          Open makes higher education more accessible with a simple platform
          offering tailored resources, insights, and exclusive scholarships.
        </motion.p>
        <motion.img
          initial={{ position: "absolute", x: 0, y: 0 }}
          whileInView={{ x: -600, y: 300 }}
          transition={{ duration: 1 }}
          src="/logoBottom.png"
        />
      </motion.div>
    </div>
  );
};

export default TextReveal;
