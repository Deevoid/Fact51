import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./send-envelope.json";
import { Link } from "react-router-dom";

export default function FormSubmit(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="form-submit">
      <p>Hurray! Your fact is now with us.</p>
      <div className="div-anim">
        <Lottie options={defaultOptions} height={300} width={100} />
      </div>
      <Link to="/">Go to Home</Link>
      <Link onClick={props.onClick}>Submit new Fact</Link>
    </div>
  );
}
