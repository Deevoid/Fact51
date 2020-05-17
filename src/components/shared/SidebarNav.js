import React from "react";
import { NavLink } from "react-router-dom";

import SubfactButton from "../SubfactButton";

export default function SidebarNav(props) {
  return (
    <nav>
      <ul className="navlink">
        <li className="li-link">
          <NavLink to="/" activeClassName="selected" exact>
            Home
          </NavLink>
        </li>
        <li className="li-link">
          <NavLink to="/dailytop10" activeClassName="selected" exact>
            Daily top 10
          </NavLink>
        </li>

        <li>
          <NavLink to="/submitfact" exact>
            <SubfactButton />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
