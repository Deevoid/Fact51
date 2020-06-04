import React from "react";
import { useParams } from "react-router-dom";
import Unsplash from "react-unsplash-wrapper";
import uuid from "react-uuid";

import Data from "../Facts.json";
import Like from "./Homepage/Like";

export default function SingleFact(props) {
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
