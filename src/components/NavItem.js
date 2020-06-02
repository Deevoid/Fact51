import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import SubfactButton from "./SubfactButton";

export default function NavItem(props) {
  return (
    <ul className="navlink">
      <li className="li-link">
        <NavLink to="/search" activeClassName="selected" exact>
          Search{" "}
          <motion.i
            className="fas fa-search"
            animate={{
              rotate: [20, -5, 20, -5, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 3,
            }}
          ></motion.i>
        </NavLink>
      </li>
      <li className="li-link">
        <NavLink to="/top10" activeClassName="selected" exact>
          Top 10
        </NavLink>
      </li>

      <li>
        <NavLink to="/submitfact" exact>
          <SubfactButton />
        </NavLink>
      </li>
    </ul>
  );
}
