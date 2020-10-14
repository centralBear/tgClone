import React from "react";
import cn from "classnames";
import useStyles from "./useStyles";

export default function HeaderContextMenu() {
  const classes = useStyles();

  return (
    <button type="button" className={cn(classes.button, classes.contextButton)}>
      <img
        className={classes.contextIcon}
        src="img/dots.svg"
        alt="Context menu icon"
      />
    </button>
  );
}
