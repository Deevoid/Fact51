import React, { useEffect } from "react";

import Data from "../../Facts.json";

export default function Topten() {
  const lastTime = new Date().getTime();
  let currTime = new Date().getTime();
  if (currTime - lastTime >= 24 * 3600 * 1000) {
    lastTime = currTime;
    console.log(lastTime);
  }
  console.log(lastTime, currTime);

  return <div>ok</div>;
}
