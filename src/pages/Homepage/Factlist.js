import React, { useState } from "react";
import Unsplash from "react-unsplash-wrapper";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

import FactCard from "./FactCard";
import Data from "../../Facts.json";
import Like from "./Like";

export default function FactList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  let postperpage = 4;
  const indexoflastPost = currentPage * postperpage;
  const indexoffirstpost = indexoflastPost - postperpage;
  const currentPost = [...Data].slice(indexoffirstpost, indexoflastPost);

  function handlepage(event, value) {
    setCurrentPage(value);
  }
  return (
    <div className="container">
      <div className="home-list">
        {currentPost.map((fact) => {
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
      <div className="paginate">
        <Pagination
          count={Math.ceil(Data.length / postperpage)}
          onChange={handlepage}
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
}
