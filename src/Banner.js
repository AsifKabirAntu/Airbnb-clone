import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h2>Get out and strech your imagination</h2>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button variant="contained" onClick={() => history.push("/search")}>
          Explore nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
