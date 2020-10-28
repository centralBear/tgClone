import React from "react";
import cn from "classnames";
import useStyles from "./useStyles";

export default function HeaderMainMenu() {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={cn(classes.button, classes.hamburgerButton)}
    >
      <div className={classes.hamburgerIcon} />
      <img
        className={classes.logo}
        src="img/Telegram.svg"
        alt="Telegram logo"
      />
    </button>
  );
}
