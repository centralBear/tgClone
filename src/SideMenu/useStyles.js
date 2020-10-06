import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    width: "31%",
    borderRight: "2px solid #e9ebed",
    backgroundColor: "#ffffff",
  },
  searchForm: {
    height: 58,
    padding: 12,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    padding: "6px 26px 6px 30px",
    fontSize: 12,
    lineHeight: "normal",
    backgroundColor: "#f2f2f2",
    backgroundImage: "url(/img/search_gray.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "5px 5px",
    backgroundSize: 24,
    border: "none",
    "&::placeholder": {
      color: "#91a5b3",
    },
    "&:focus": {
      backgroundColor: "#ffffff",
      backgroundPosition: "4px 4px",
      border: "1px solid #d9dbde",
      borderRadius: 2,
      outline: "none",
    },
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    listStyle: "none",
    overflow: "scroll",
    overflowX: "hidden",
  },
  contactButton: {
    display: "flex",
    width: "100%",
    margin: 0,
    padding: "7px 16px",
    textAlign: "left",
    textDecoration: "none",
    backgroundColor: "#ffffff",
    border: "none",
    cursor: "pointer",
    "&:focus, &:hover": {
      backgroundColor: "#f2f6fa",
      outline: "none",
    },
  },
  contactButtonActive: {
    backgroundColor: "#5d8db3",
    "& $contactName, & $lastMessage, & $lastMessageTime": {
      color: "#ffffff",
    },
    "&:focus, &:hover": {
      backgroundColor: "#5d8db3",
    },
  },
  contactAvatar: {
    width: 48,
    height: 48,
    marginRight: 15,
    borderRadius: "50%",
  },
  contactWrapper: {
    height: 44,
    marginRight: "auto",
    fontSize: 13,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  contactName: {
    margin: "3px 0 8px 0",
    fontWeight: "bold",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  lastMessage: {
    margin: 0,
    color: "gray",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  lastMessageSender: {
    color: "#3a6d99",
  },
  lastMessageTime: {
    margin: 0,
    fontSize: 11,
    color: "#b3b3b3",
    whiteSpace: "nowrap",
  },
  unreadMessageFrom: {
    display: "none",
    margin: "6px 0 0 0",
    padding: 5,
    minWidth: 21,
    fontSize: 11,
    color: "#ffffff",
    textAlign: "center",
    backgroundColor: "#3a6d99",
    borderRadius: "50%",
  },
  unreadMessage: {
    display: "none",
    width: 8,
    height: 8,
    margin: "12px 0 0 0",
    borderRadius: 5,
    backgroundColor: "#c1d6e5",
  },
  messageStatusActive: {
    display: "block",
  },
});

export default useStyles;
