import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    html: {
      width: "100%",
      height: "100%",
    },
    body: {
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
      backgroundColor: "#e7ebf0",
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    "*": {
      fontFamily: "Tahoma, sans-serif, Arial",
      boxSizing: "border-box",
    },
    "#root": {
      width: "100%",
      height: "100%",
    },
  },
  main: {
    display: "flex",
    maxWidth: 1010,
    height: "95%",
    margin: "0 auto",
    paddingBottom: 23,
    border: "2px solid #e9ebed",
  },
});

export default useStyles;
