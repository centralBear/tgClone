import React from "react";
import * as R from "ramda";
import Header from "./Header/Header";
import SideMenu from "./SideMenu/SideMenu";
import Chat from "./Chat/Chat";

function App() {
  const authUser = {
    name: "Антон Ридель",
    avatarUrl: "img/avatar_standart.jpg",
  };

  const INITIAL_CONTACT_LIST = [
    {
      id: 0,
      name: "Олег Газманов",
      lastVisit: "30 minutes ago",
      avatarUrl: "img/avatar_1.png",
      messages: [
        {
          id: 2,
          author: authUser.name,
          text: "Привет. Отлично.",
          dateAndTime: new Date("August 20, 2020 18:24:20").toString(),
          isMessageFirst: true,
        },
        {
          id: 1,
          author: "Олег Газманов",
          text: "Как дела?",
          dateAndTime: new Date("August 20, 2020 18:24:20").toString(),
          isMessageFirst: false,
        },
        {
          id: 0,
          author: "Олег Газманов",
          text: "Привет!",
          dateAndTime: new Date("August 20, 2020 18:24:20").toString(),
          isMessageFirst: true,
        },
      ],
    },
    {
      id: 1,
      name: "Филипп Киркоров",
      lastVisit: "30 minutes ago",
      avatarUrl: "img/avatar_0.jpg",
      messages: [
        {
          id: 0,
          author: "Филипп Киркоров",
          text: "Test text2!",
          dateAndTime: new Date("August 20, 2020 18:24:20").toString(),
          isMessageFirst: true,
        },
      ],
    },
    {
      id: 2,
      name: "TestUser1",
      lastVisit: "30 minutes ago",
      avatarUrl: "img/avatar_standart.jpg",
      messages: [
        {
          id: 0,
          author: "TestUser1",
          text: "Test text3!",
          dateAndTime: new Date("September 20, 2020 18:24:20").toString(),
          isMessageFirst: true,
        },
      ],
    },
    {
      id: 3,
      name: "TestUser2",
      lastVisit: "30 minutes ago",
      avatarUrl: "img/avatar_standart.jpg",
      messages: [
        {
          id: 0,
          author: "TestUser2",
          text: "Test text4!",
          dateAndTime: new Date("August 20, 2020 18:24:20").toString(),
          isMessageFirst: true,
        },
      ],
    },
    {
      id: 4,
      name: "TestUser3",
      lastVisit: "30 minutes ago",
      avatarUrl: "img/avatar_standart.jpg",
      messages: [
        {
          id: 0,
          author: "TestUser3",
          text: "Test text5!",
          dateAndTime: new Date("August 20, 2020 18:24:20").toString(),
          isMessageFirst: true,
        },
      ],
    },
    {
      id: 5,
      name: "TestUser4",
      lastVisit: "30 minutes ago",
      avatarUrl: "img/avatar_standart.jpg",
      messages: [
        {
          id: 0,
          author: "TestUser4",
          text: "Test text6!",
          dateAndTime: new Date("August 20, 2020 18:24:20").toString(),
          isMessageFirst: true,
        },
      ],
    },
    {
      id: 6,
      name: "testUser5",
      lastVisit: "30 minutes ago",
      avatarUrl: "img/avatar_standart.jpg",
      messages: [
        {
          id: 0,
          author: "TestUser5",
          text: "Test text7!",
          dateAndTime: new Date("August 20, 2020 18:24:20").toString(),
          isMessageFirst: true,
        },
      ],
    },
  ];

  const INITIAL_CURRENT_CONTACT_ID = 0;

  const [contactList, setContactList] = React.useState(INITIAL_CONTACT_LIST);

  const [currentContactId, setCurrentContactId] = React.useState(
    INITIAL_CURRENT_CONTACT_ID
  );

  const selectedUser = R.find(R.propEq("id", currentContactId))(contactList);

  const toggleSelected = (clickedId) => {
    setCurrentContactId(clickedId);
  };

  const isMessageFirst = () => {
    if (
      selectedUser.messages[0].author !== authUser.name ||
      new Date(selectedUser.messages[0].dateAndTime).toDateString() !==
        new Date().toDateString()
    ) {
      return true;
    }
    return false;
  };

  const addNewMessage = (message) => {
    return {
      id: selectedUser.messages[0].id + 1,
      author: authUser.name,
      text: message,
      dateAndTime: new Date().toString(),
      isMessageFirst: isMessageFirst(),
    };
  };

  const sendMessage = (message) => {
    const filteredContactList = R.filter(
      (user) => user.id !== selectedUser.id,
      contactList
    );
    const newContactsList = [
      {
        ...selectedUser,
        messages: [addNewMessage(message), ...selectedUser.messages],
      },
      ...filteredContactList,
    ];

    setContactList(newContactsList);
  };

  return (
    <>
      <Header selectedUser={selectedUser} />
      <main className="main">
        <SideMenu
          contactList={contactList}
          authUserName={authUser.name}
          onClick={toggleSelected}
          currentContactId={currentContactId}
        />
        <Chat
          selectedUser={selectedUser}
          authUser={authUser}
          onSend={sendMessage}
        />
      </main>
    </>
  );
}

export default App;
