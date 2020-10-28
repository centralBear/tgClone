import React from "react";
import cn from "classnames";
import useStyles from "./useStyles";

export default function HeaderSearch() {
  const classes = useStyles();

  return (
    <button type="button" className={cn(classes.button, classes.searchButton)}>
      <img
        className={classes.searchIcon}
        src="img/search_white.svg"
        alt="Search icon"
      />
    </button>
  );
}
