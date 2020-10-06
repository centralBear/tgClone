import React from "react";
import cn from "classnames";
import useStyles from "./useStyles";

export default function HeaderContextMenu() {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={cn(classes.headerButton, classes.headerContextButton)}
    >
      <img
        className={classes.headerContextIcon}
        src="img/dots.svg"
        alt="Context menu icon"
      />
    </button>
  );
}
