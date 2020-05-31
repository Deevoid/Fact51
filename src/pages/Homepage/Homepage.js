import React, { useEffect } from "react";

import FactList from "./Factlist";
import Fotd from "./Fotd";

export default function Homepage() {
  useEffect(() => {
    document.title = "Fact51 | Fun Facts for you";
  }, []);

  return (
    <>
      <Fotd />
      <div className="discover">
        <h3>
          Discover more <i className="fas fa-chevron-down"></i>
        </h3>
      </div>
      <FactList />
    </>
  );
}
