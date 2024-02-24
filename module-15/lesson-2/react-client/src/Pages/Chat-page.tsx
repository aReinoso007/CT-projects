import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ChatContext from "../Components/ChatContext";
import MessageInput from "../Components/MessageInput";

type ChatPageProps = {
  socket: any;
};

const ChatPage: React.FC<ChatPageProps> = ({ socket }) => {
  

  return (
    <Container>
      <Container>
        <ChatContext socket={socket} />
      </Container>
      <MessageInput socket={socket} />
    </Container>
  );
};

export default ChatPage;
