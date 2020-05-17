import React, { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    document.title = "Fact51 | Fun Facts for you";
  }, []);
  return <div>Daily Top 10</div>;
}
