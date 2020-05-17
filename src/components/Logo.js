import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ReactComponent as Rlogo } from "../logo.svg";

export default function Logo() {
  return (
    <motion.span whileTap={{ scale: 0.9 }} className="nav-brand">
      <Link to="/">
        <Rlogo />
        <span className="nav-brand-txt">Fact51</span>
      </Link>
    </motion.span>
  );
}
