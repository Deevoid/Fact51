import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HamburgerElastic } from "react-animated-burgers";

import Navlink from "./Navlink";
import Logo from "./Logo";
import Sidebar from "./shared/Sidebar";
import Backdrop from "./shared/Backdrop";

export default function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  function togglebtnHandler() {
    setToggle(!toggle);
    setSidebar(!sidebar);
  }
  function closeDrawer() {
    setSidebar(false);
    setToggle(false);
  }

  return ReactDOM.createPortal(
    <React.Fragment>
      {sidebar && <Backdrop onClick={closeDrawer} />}
      {sidebar && <Sidebar />}
      <nav className="mainNav">
        <div className="container">
          <div className="nav-content">
            <Logo />
            <Navlink />
            <div className="sidebar-btn-div">
              <HamburgerElastic
                isActive={toggle}
                toggleButton={togglebtnHandler}
                barColor="white"
                buttonWidth={20}
                className="hambtn"
              />
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>,
    document.getElementById("headerHook")
  );
}
