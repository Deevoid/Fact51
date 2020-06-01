import React, { useState, useEffect } from "react";
import Unsplash from "react-unsplash-wrapper";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import FactCard from "./FactCard";
import Data from "../../Facts.json";
import Like from "./Like";

export default function FactList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPost, setCurrentPost] = useState([]);

  let postperpage = 4;
  const indexoflastPost = currentPage * postperpage;
  const indexoffirstpost = indexoflastPost - postperpage;
  const slicedArray = [...Data].slice(indexoffirstpost, indexoflastPost);

  useEffect(() => {
    setCurrentPost(slicedArray);
  }, [currentPage]);

  function handlepage(event, value) {
    setCurrentPage(value);
    document.querySelector(".discover").scrollIntoView();
  }
  function handleSearch(event, value) {
    if (value) {
      let filteredArray = [...Data].filter((fact) => fact.category === value);
      setCurrentPost(filteredArray);
    } else {
      setCurrentPost(slicedArray);
    }
  }
  return (
    <div className="container">
      <div className="filter-box">
        {
          <Autocomplete
            onInputChange={handleSearch}
            size="small"
            autoHighlight
            id="multiple-limit-tags"
            options={Data}
            getOptionLabel={(option) => option.category}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Filter:"
                placeholder="Categories"
              />
            )}
          />
        }
      </div>
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
          color="primary"
        />
      </div>
    </div>
  );
}
