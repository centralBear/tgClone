import React from "react";
import useStyles from "./useStyles";

export default function SearchForm() {
  const classes = useStyles();

  return (
    <form className={classes.searchForm}>
      <input
        className={classes.searchInput}
        type="text"
        name="search"
        placeholder="Search"
        autoComplete="off"
        id="search"
      />
    </form>
  );
}
