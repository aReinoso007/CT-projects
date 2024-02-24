import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChatProvider from "../Components/ChatProvider";
import MessageInput from "../Components/MessageInput";
import Signout from "../Components/Signout";

type ChatPageProps = {
  socket: any;
};

const ChatPage: React.FC<ChatPageProps> = ({ socket }) => {
  

  return (
    <Container>
      <Row>
        <Col>
        <Signout socket={socket} />
        </Col>
      </Row>
      <Container>
        <ChatProvider socket={socket} />
      </Container>
      <MessageInput socket={socket} />
    </Container>
  );
};

export default ChatPage;
