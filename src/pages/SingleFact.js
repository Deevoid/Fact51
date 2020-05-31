import React from "react";
import { useParams } from "react-router-dom";
import Unsplash from "react-unsplash-wrapper";

import Data from "../Facts.json";

export default function SingleFact(props) {
  const factId = useParams().factId;
  const filteredFact = Data.filter((fact) => fact.id === factId);
  const fact = filteredFact[0];
  return (
    <div className="full-fact">
      <div className="container">
        <div className="fact-img">
          <Unsplash
            width="300"
            height="300"
            keywords={fact.keywords.toString()}
            img
          />
        </div>
        <div className="fact-text">
          <span className="span-category">Category: {fact.category} </span>
          <a href={fact.source} target="_blank" rel="noopener noreferrer">
            <span className="span-source">View source</span>
          </a>
          <p>{fact.text}</p>
        </div>
      </div>
    </div>
  );
}
