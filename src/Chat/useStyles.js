import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  chat: {
    display: "flex",
    flexDirection: "column",
    width: "69%",
    backgroundColor: "#ffffff",
  },
  chatHistory: {
    display: "flex",
    flexDirection: "column-reverse",
    flexGrow: 1,
    overflow: "scroll",
    overflowX: "hidden",
  },
  messageWrapper: {
    width: "83%",
    maxWidth: 560,
    padding: "0 15px 0 15px",
    margin: "0 auto",
  },
  contentMessageWrapper: {
    display: "flex",
    alignItems: "flex-start",
    margin: "8px 10px 8px 16px",
  },
  profileButton: {
    display: "block",
    height: 42,
    marginRight: 18,
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    "&:focus": {
      outline: "none",
    },
  },
  contactAvatar: {
    width: 48,
    height: 48,
    marginRight: 15,
    borderRadius: "50%",
  },
  contactAvatarChat: {
    width: 42,
    height: 42,
    margin: 0,
  },
  messageAuthorButton: {
    display: "block",
    marginBottom: 6,
    padding: 0,
    fontSize: 12,
    fontWeight: "bold",
    color: "#3a6d99",
    textDecoration: "none",
    backgroundColor: "transparent",
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
  messageText: {
    margin: 0,
    fontSize: 13,
    lineHeight: "19px",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    overflow: "hidden",
  },
  messageTime: {
    justifySelf: "end",
    margin: "0 0 0 auto",
    fontSize: 11,
    color: "#adadad",
    whiteSpace: "nowrap",
  },
  messageTextWithoutPhoto: {
    marginLeft: 61,
  },
  chatDate: {
    margin: "5px 0",
    padding: "4px 7px",
    fontSize: 13,
    lineHeight: "18px",
    color: "#999999",
    textAlign: "center",
  },
  chatHistoryGap: {
    width: "100%",
    minHeight: 39,
  },
  chatForm: {
    maxWidth: 554,
    display: "flex",
    alignItems: "flex-start",
    margin: "0 auto",
    padding: "10px 15px 21px 15px",
  },
  chatFormWrapper: {
    maxWidth: "73%",
  },
  chatProfileButton: {
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
  },
  chatProfileButtonLeft: {
    marginRight: 18,
  },
  chatProfileButtonRight: {
    marginLeft: 20,
  },
  messageFormAvatar: {
    width: 52,
    height: 52,
    borderRadius: "50%",
  },
  messageField: {
    width: 382,
    height: 52,
    marginBottom: 11,
    padding: "0 17px",
    fontFamily: "inherit",
    fontSize: 12,
    lineHeight: "20px",
    resize: "none",
    border: "none",
    borderBottom: "1px solid #e8e8e8",
    outline: "none",
    "&:focus": {
      borderBottom: "2px solid #77b7e4",
    },
  },
  messageControls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageAttach: {
    display: "none",
  },
  messageAttachLabel: {
    display: "block",
    cursor: "pointer",
    "&:focus, &:hover": {
      "& $messageAttachIcon": {
        fill: "#8d8a8a",
      },
    },
    "&:active": {
      "& $messageAttachIcon": {
        fill: "#3589c5",
      },
    },
  },
  messageAttachIcon: {
    width: 24,
    height: 24,
    fill: "#b5b5b5",
  },
  chatSendButton: {
    height: 18,
    color: "#499dd9",
    fontSize: 13,
    lineHeight: "18px",
    fontWeight: "bold",
    textTransform: "uppercase",
    border: "none",
    borderRadius: 0,
    backgroundColor: "transparent",
    cursor: "pointer",
    outline: "none",
    "&:focus, &:hover": {
      color: "#3589c5",
    },
  },
});

export default useStyles;
