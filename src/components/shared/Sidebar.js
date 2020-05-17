import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import SidebarNav from "./SidebarNav";

export default function Sidebar(props) {
  const content = (
    <motion.div
      initial={{ width: "0vw", x: -100 }}
      animate={{ width: "60vw", x: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
      }}
      className="sidebar"
    >
      <div className="sidebar-content">
        <SidebarNav />
      </div>
    </motion.div>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawerHook"));
}
