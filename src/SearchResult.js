import React from "react";
import "./SearchResult.css";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderRoundedIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarRateRoundedIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
