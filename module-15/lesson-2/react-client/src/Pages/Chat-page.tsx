import React, { useEffect, useRef, useState } from "react";
import ChatBar from "../Components/ChatBar";
import ChatBody from "../Components/ChatBody";
import ChatFooter from "../Components/ChatFooter";

type ChatPageProps = {
  socket: any;
};

const ChatPage: React.FC<ChatPageProps> = ({ socket }) => {
  const [messages, setMessages] = useState([] as any);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null) as any;

  useEffect(() => {
    socket.on("messageResponse", (data: any) =>
      setMessages([...messages, data])
    );
  }, [socket, messages]);

  useEffect(() => {
    socket.on("typingResponse", (data: any) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
