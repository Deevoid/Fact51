import React from "react";
import Unsplash from "react-unsplash-wrapper";
import { Link } from "react-router-dom";

import FactCard from "../Homepage/FactCard";
import Like from "../Homepage/Like";
import Data from "../../Facts.json";

export default function Topten() {
  const top = [...Data].sort((a, b) => (a.like > b.id ? 1 : -1)).slice(0, 10);

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
