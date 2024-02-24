import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { createContext } from "vm";

type ChatProviderProps = {
  socket: any;
  setMessageText?: (messageText: string) => void;
  sendMessage?: () => void;
};

type Message = {
  text: string;
  userId: string;
};

interface ChatContextProps {
  messages: Message[];
  userId: string;
}

const ChatProvider: React.FC<ChatProviderProps> = ({ socket }) => {
  const [messages, setMessages] = useState([] as any);
  const userID = sessionStorage.getItem("userName");
  useEffect(() => {
    socket.on("message", (message: Message) => {
      setMessages([...messages, message]);
    });
  }, [socket, messages, userID]);

  return (
    <Container
      style={{
        marginTop: "40px",
        background: "lightblue",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {messages.map((message: Message, index: any) => (
        <Card key={index} className="mb-2">
          <Card.Body>
            <Card.Text style={{color: message.userId === userID ? 'blue' : 'green', float: message.userId === userID ? 'right' : 'left'}}>{message.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
export default ChatProvider;
