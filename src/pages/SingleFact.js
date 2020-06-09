import React from "react";
import { useParams } from "react-router-dom";
import Unsplash from "react-unsplash-wrapper";
import uuid from "react-uuid";

import useWebShare from "react-use-web-share";
import { motion } from "framer-motion";

import Data from "../Facts.json";
import Like from "./Homepage/Like";

export default function SingleFact(props) {
  const { loading, isSupported, share } = useWebShare();

  const factId = useParams().factId;
  const filteredFact = [...Data].filter((fact) => fact.id == factId);
  const fact = filteredFact[0];
  return (
    <div className="full-fact">
      <div className="container">
        <div className="fact-img">
          <Unsplash keywords={fact.keywords.toString()} />
        </div>
        <div className="fact-text">
          <span className="span-category">Category: {fact.category} </span>
          <a href={fact.source} target="_blank" rel="noopener noreferrer">
            <span className="span-source">View source</span>
          </a>
          {!loading && isSupported && (
            <span
              className="span-share"
              onClick={() => {
                let text = "Check out this amazing fact on *fact51*";
                share({ text });
              }}
            >
              Share
              <motion.i
                className="fas fa-share-alt"
                animate={{
                  rotate: [20, -20, 20, -20, 0],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  loop: Infinity,
                  repeatDelay: 2,
                }}
              ></motion.i>
            </span>
          )}
          <p className="fact-p">{fact.text}</p>

          <div className="keywords">
            <span>Keywords :</span>

            {fact.keywords.map((e) => {
              return (
                <span key={uuid()} className="single-keywords">
                  {e}{" "}
                </span>
              );
            })}
          </div>
          <div className="like-div">
            {<Like nana={fact.like} idfact={fact.id} />}
          </div>
        </div>
      </div>
    </div>
  );
}
