import React from "react";
import { motion } from "framer-motion";

export default function SubFactButton() {
  return (
    <button className="subfactbtn">
      Submit a fact
      <motion.i
        className="fas fa-paper-plane"
        animate={{
          rotate: [0, 20, 0, 20, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 0,
        }}
      ></motion.i>
    </button>
  );
}
