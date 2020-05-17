import React from "react";
import ReactDOM from "react-dom";

export default function Footer(props) {
  const year = new Date().getFullYear();
  return ReactDOM.createPortal(
    <div className="footer-div">
      <p className="copyright">Copyright &#169; Fact51 2019-{year}</p>
    </div>,
    document.getElementById("footerHook")
  );
}
