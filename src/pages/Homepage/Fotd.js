import React from "react";
import Unsplash from "react-unsplash-wrapper";
import Lottie from "lottie-react-web";
import useWebShare from "react-use-web-share";

import animation from "../../Lottiefiles/5824-celebration-videos.json";
import Data from "../../Facts.json";

export default function Fotd() {
  const day = new Date().getDay();

  const fact = Data[day % Data.length];
  const { loading, isSupported, share } = useWebShare();

  return (
    <div className="fotd">
      <div className="container">
        <h2>Fact of the day</h2>
        <div className="card">
          <div className="card-img">
            <Unsplash keywords={fact.keywords.toString()} />
          </div>
          <div className="img-overlay"></div>
          <div className="card-text">
            <p>{fact.text} </p>
            <div className="tags">
              <a href={fact.source} target="_blank" rel="noopener noreferrer">
                <span className="span-source">View source</span>
              </a>
              {!loading && isSupported && (
                <span
                  className="span-share"
                  onClick={() => {
                    const title = "Fact of the day";
                    let text = `*Fact of the day* ${fact.text}`;
                    share({ title, text });
                  }}
                >
                  Share <i className="fas fa-share-alt"></i>
                </span>
              )}
            </div>
          </div>
          <div className="lottie">
            <Lottie
              options={{
                autoplay: true,
                loop: true,
                animationData: animation,
              }}
              height={300}
              speed={0.7}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
