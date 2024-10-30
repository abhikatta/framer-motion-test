import { motion } from "framer-motion";

const Textfade = () => {
  return (
    <motion.div layout transition={{ delay: 1 }}>
      <motion.p
        layout
        transition={{ duration: 2, delay: 1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Unlock data-backed strategies to secure your perfect college{" "}
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.0001,
          }}
        >
          🧑‍🎓
        </motion.span>
        fit
      </motion.p>
    </motion.div>
  );
};

export default Textfade;
