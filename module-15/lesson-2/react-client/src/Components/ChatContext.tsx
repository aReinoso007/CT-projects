import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

type ChatContextProps = {
  socket: any;
  setMessageText?: (messageText: string) => void;
  sendMessage?: () => void;
};

const ChatContext: React.FC<ChatContextProps> = ({ socket }) => {
  const [messages, setMessages] = useState([] as any);

  useEffect(() => {
    socket.on("message", (message: any) => {
      setMessages([...messages, message]);
    });
  }, [socket, messages]);

  return (
    <Container style={{marginTop: '40px', background: 'lightblue', padding: '20px', borderRadius: '10px' }}>
      {messages.map((message: any, index: any) => (
        <Card key={index} className="mb-2">
          <Card.Body>
            <Card.Text>{message.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
export default ChatContext;
