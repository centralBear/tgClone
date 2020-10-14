import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    maxWidth: 1010,
    height: 48,
    margin: [0, "auto"],
    backgroundColor: "#5682a3",
  },
  button: {
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: "#497799",
      outline: "none",
    },
  },
  hamburgerButton: {
    display: "flex",
    width: "31%",
    alignItems: "center",
    padding: [17, 20, 15, 22],
    "&:hover, &:focus": {
      "& > $hamburgerIcon": {
        "&::before": {
          top: -7,
        },
        "&::after": {
          bottom: -7,
        },
      },
    },
  },
  hamburgerIcon: {
    position: "relative",
    width: 18,
    height: 2,
    marginBottom: 2,
    marginRight: 40,
    backgroundColor: "#ffffff",
    "&::before, &::after": {
      content: "''",
      position: "absolute",
      display: "block",
      width: 18,
      height: 2,
      backgroundColor: "#ffffff",
    },
    "&::before": {
      top: -6,
    },
    "&::after": {
      bottom: -6,
    },
  },
  logo: {
    width: 62,
    height: 14,
    marginTop: 1,
  },
  contactInfoWrapper: {
    width: "58%",
  },
  contactInfoButton: {
    display: "flex",
    padding: [15, 19],
    fontSize: 13,
    lineHeight: "18px",
    textDecoration: "none",
    "&:focus, &:hover": {
      "& > $onlineStatus": {
        color: "#ffffff",
        outline: "none",
      },
    },
  },
  contactName: {
    marginRight: 6,
    fontWeight: "bold",
    color: "#ffffff",
  },
  onlineStatus: {
    color: "#b9cfe3",
  },
  searchButton: {
    display: "block",
    width: 55,
    padding: [7, 10],
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  contextButton: {
    display: "block",
    width: 55,
    padding: [7, 12],
  },
  contextIcon: {
    width: 30,
    height: 30,
  },
});

export default useStyles;
