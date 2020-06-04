import React from "react";
import Unsplash from "react-unsplash-wrapper";

export default function Image(props) {
  return <Unsplash width="350" height="300" keywords={props.keywords} img />;
}
