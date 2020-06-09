import React from "react";
import Unsplash from "react-unsplash-wrapper";
import { Link } from "react-router-dom";
import useWebShare from "react-use-web-share";
import { motion } from "framer-motion";

import FactCard from "../Homepage/FactCard";
import Like from "../Homepage/Like";
import Data from "../../Facts.json";

export default function Topten() {
  const { loading, isSupported, share } = useWebShare();

  const top = [...Data].sort((a, b) => (a.like < b.like ? 1 : -1)).slice(0, 10);

  return (
    <div className="container">
      <h2 className="daily-h2">Top 10 facts curated for you.</h2>
      <div className="daily-list">
        {top.map((fact) => {
          return (
            <FactCard
              key={fact.id}
              cardImg={
                <Unsplash
                  width="369"
                  height="300"
                  keywords={fact.keywords.toString()}
                  img
                />
              }
              cardHeader={<Like nana={fact.like} idfact={fact.id} />}
              cardBody={
                <>
                  <span className="span-category">
                    Category: {fact.category}
                  </span>
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
                  <p className="fact-text">{fact.text}</p>
                  <Link to={`/${fact.id}`}>
                    <p className="read-more">Read More</p>
                  </Link>
                </>
              }
            />
          );
        })}
      </div>
    </div>
  );
}
