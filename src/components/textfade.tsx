import { motion } from "framer-motion";

const Textfade = () => {
  return (
    <motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        Unlock data-backed strategies to secure your perfect college{" "}
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.0001,
          }}>
          🧑‍🎓
        </motion.span>
        fit
      </motion.p>
    </motion.div>
  );
};

export default Textfade;
