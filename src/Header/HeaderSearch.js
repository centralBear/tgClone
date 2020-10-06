import React from "react";
import cn from "classnames";
import useStyles from "./useStyles";

export default function HeaderSearch() {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={cn(classes.headerButton, classes.headerSearchButton)}
    >
      <img
        className={classes.headerSearchIcon}
        src="img/search_white.svg"
        alt="Search icon"
      />
    </button>
  );
}
