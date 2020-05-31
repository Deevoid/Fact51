import React, { useEffect } from "react";

import Topten from "./Topten";

export default function Daily() {
  useEffect(() => {
    document.title = "Daily Facts | Fact51";
  }, []);
  return (
    <div>
      <Topten />
    </div>
  );
}
