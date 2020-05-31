import React, { useState } from "react";
import Lottie from "lottie-react-web";
import animation from "../../Lottiefiles/like.json";
import NumberFormat from "react-number-format";
import Data from "../../Facts.json";

export default function Like(props) {
  const [like, setLike] = useState(false);
  const abc = props.nana;
  const id = props.idfact;
  const [count, setCount] = useState(abc);

  function increase() {
    setLike(!like);
    setCount(count + 1);
    const objID = Data.findIndex((obj) => obj.id === id);
    Data[objID].like = count + 1;
  }
  function decrease() {
    setLike(!like);
    setCount(count - 1);
    const objID = Data.findIndex((obj) => obj.id === id);
    Data[objID].like = count - 1;
  }

  return (
    <>
      <div className="like-btn" onClick={!like ? increase : decrease}>
        <Lottie
          direction={like ? 1 : -1}
          options={{
            autoplay: false,
            loop: false,
            animationData: animation,
          }}
          height={50}
          width={50}
        />
      </div>
      <p className="like-count">
        <NumberFormat
          value={count}
          displayType={"text"}
          thousandSeparator={true}
          suffix={" likes"}
        />
      </p>
    </>
  );
}
