import React from "react";
import cn from "classnames";
import useStyles from "./useStyles";

export default function HeaderMainMenu() {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={cn(classes.headerButton, classes.headerHamburgerButton)}
    >
      <div className={classes.headerHamburgerIcon} />
      <img
        className={classes.headerLogo}
        src="img/Telegram.svg"
        alt="Telegram logo"
      />
    </button>
  );
}
