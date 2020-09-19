import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 guests - 26 August to 30 August - 2 guests</p>
        <h1>Stay nearby</h1>
        <Button variant="outlined">Cancellation flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Private room in Dhaka"
        title="Stay at this spacious Edwardian house"
        description="1 guest - 1 bedroom - 1 kitchen - wifi - Free parking"
        star={4.3}
        price="BDT2000 / night"
        total="2400 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Private room in Dhaka"
        title="Stay at this spacious Edwardian house"
        description="1 guest - 1 bedroom - 1 kitchen - wifi - Free parking"
        star={4.3}
        price="BDT2000 / night"
        total="2400 total"
      />
    </div>
  );
}

export default SearchPage;
