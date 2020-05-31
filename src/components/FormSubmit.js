import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react-web";
import animation from "../Lottiefiles/send-envelope.json";

export default function FormSubmit(props) {
  return (
    <div className="form-submit">
      <p>Hurray! Your fact is now with us.</p>
      <div className="div-anim">
        <Lottie
          options={{
            autoplay: true,
            loop: true,
            animationData: animation,
          }}
          height={300}
          width={100}
        />
      </div>
      <Link to="/">Go to Home</Link>
      <Link to="" onClick={props.onClick}>
        Submit new Fact
      </Link>
    </div>
  );
}
