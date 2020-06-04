import React from "react";
import LazyLoad from "react-lazyload";
import Unsplash from "react-unsplash-wrapper";

export default function Image(props) {
  return (
    <LazyLoad height={300} offset={100} once>
      <Unsplash width="350" height="300" keywords={props.keywords} img />
    </LazyLoad>
  );
}
