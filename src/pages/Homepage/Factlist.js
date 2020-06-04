import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import useWebShare from "react-use-web-share";
import { motion } from "framer-motion";

import FactCard from "./FactCard";
import Data from "../../Facts.json";
import Like from "./Like";
import Image from "./Image";

export default function FactList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPost, setCurrentPost] = useState([]);
  const postperpage = 9;
  const [isPaginate, setPaginate] = useState(true);

  const { loading, isSupported, share } = useWebShare();

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

      setPaginate(false);
    } else {
      setCurrentPost(slicedArray);

      setPaginate(true);
    }
  }
  let ne = [...new Set([...Data].map((e) => e.category))];

  return (
    <div className="container">
      <div className="filter-box">
        {
          <Autocomplete
            onInputChange={handleSearch}
            size="small"
            autoHighlight
            id="multiple-limit-tags"
            options={ne}
            getOptionLabel={(option) => option.toString()}
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
                <>
                  <Image keywords={fact.keywords.toString()} />
                  {!loading && isSupported && (
                    <div className="share-div">
                      <span
                        className="span-share"
                        onClick={() => {
                          let text = "Check out this amazing fact on *fact51*";
                          share({ text });
                        }}
                      >
                        <motion.i
                          className="fas fa-share-alt"
                          animate={{
                            scale: [0.8, 1.1, 0.8, 1.1, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            loop: Infinity,
                            repeatDelay: 2,
                          }}
                        ></motion.i>
                      </span>
                    </div>
                  )}
                </>
              }
              cardHeader={<Like nana={fact.like} idfact={fact.id} />}
              cardBody={
                <>
                  <p className="span-category">Category: {fact.category}</p>

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
        {isPaginate && (
          <Pagination
            siblingCount={1}
            boundaryCount={1}
            size="small"
            count={Math.ceil(Data.length / postperpage)}
            onChange={handlepage}
            showFirstButton
            showLastButton
            color="primary"
          />
        )}
      </div>
    </div>
  );
}
