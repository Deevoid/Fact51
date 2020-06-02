import React from "react";
import { NavLink } from "react-router-dom";

import SubfactButton from "./SubfactButton";

export default function Navlink(props) {
  return (
    <ul className="navlink">
      <li className="li-link">
        <NavLink to="/top10" activeClassName="selected" exact>
          Top 10
        </NavLink>
      </li>
      <li className="li-link">
        <NavLink to="/search" activeClassName="selected" exact></NavLink>
      </li>

      <li>
        <NavLink to="/submitfact" exact>
          <SubfactButton />
        </NavLink>
      </li>
    </ul>
  );
}
