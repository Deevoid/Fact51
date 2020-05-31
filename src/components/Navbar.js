import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HamburgerElastic } from "react-animated-burgers";
import ScrollLock from "react-scrolllock";

import Navlink from "./Navlink";
import Logo from "./Logo";
import Sidebar from "./shared/Sidebar";
import Backdrop from "./shared/Backdrop";

export default function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [scroll, setScroll] = useState(false);

  function togglebtnHandler() {
    setToggle(!toggle);
    setSidebar(!sidebar);
    setScroll(true);
  }
  function closeDrawer() {
    setSidebar(false);
    setToggle(false);
    setScroll(false);
  }

  return ReactDOM.createPortal(
    <>
      <ScrollLock isActive={scroll}></ScrollLock>
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
    </>,
    document.getElementById("headerHook")
  );
}
