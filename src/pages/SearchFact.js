import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import TextField from "@material-ui/core/TextField";
import useWebShare from "react-use-web-share";
import { motion } from "framer-motion";

import FactCard from "./Homepage/FactCard";
import Lottie from "lottie-react-web";

import animation from "../Lottiefiles/sherlock.json";
import Data from "../Facts.json";
import Image from "./Homepage/Image";

export default function SearchFact() {
  const { loading, isSupported, share } = useWebShare();

  const [formValue, setFormValue] = useState("");
  const options = {
    shouldSort: true,
    minMatchCharLength: 2,
    threshold: 0.4,
    includeScore: true,
    keys: [
      {
        name: "category",
        weight: 0.3,
      },
      {
        name: "text",
        weight: 0.7,
      },
      {
        name: "keywords",
        weight: 0.6,
      },
    ],
  };
  const fuse = new Fuse(Data, options);

  const result = fuse.search(formValue.trim());
  const resultArray = result.map((result) => result.item);
  function handleSubmit(event) {
    event.preventDefault();
    setFormValue(event.target.value);
  }
  function handleSubmitBtn(event) {
    event.preventDefault();
    setFormValue((prev) => prev);
  }

  return (
    <div className="container">
      <div className="search-box">
        <form>
          <TextField
            id="outlined-basic"
            label="Search"
            size="small"
            variant="outlined"
            autoComplete="true"
            placeholder="Search your fact"
            value={formValue || ""}
            onChange={handleSubmit}
          />
          <button type="submit" onClick={handleSubmitBtn}>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="search-list">
        {resultArray.map((fact) => {
          return (
            <FactCard
              key={fact.id}
              cardImg={<Image keywords={fact.keywords.toString()} />}
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

        {!formValue && (
          <div className="lottie">
            <Lottie
              options={{
                autoplay: true,
                loop: true,
                animationData: animation,
              }}
              height={300}
              speed={1}
            />
            <p>Search from a plethora of facts.</p>
          </div>
        )}
      </div>
    </div>
  );
}
