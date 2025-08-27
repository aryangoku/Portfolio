import React from "react";
import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, x = 0, y = 24, duration = 0.6, once = true, amount = 0.2 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}