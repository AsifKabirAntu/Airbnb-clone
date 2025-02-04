import React, { useState } from "react";
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleAltRoundedIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push("/search")}>Search</Button>
    </div>
  );
}

export default Search;
