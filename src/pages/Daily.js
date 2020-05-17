import React, { useEffect } from "react";

export default function Daily() {
  useEffect(() => {
    document.title = "Daily Facts | Fact51";
  }, []);
  return <div>Daily Top 10</div>;
}
