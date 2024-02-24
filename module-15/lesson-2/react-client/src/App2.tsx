import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { io } from "socket.io-client";
import SimpleMessaeInput from "./Components/SimpleMessageInput";
import SimpleChatBody from "./Components/SimpleChatBody";

const socket = io("http://127.0.0.1:5000");

function AppDos() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    console.log("Connecting to server...");
    socket.on("connect", () => {
      console.log("Connected to server");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      setIsConnected(false);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to React with Sockets </h1>
      <Container>
        <h2>Chat Room</h2>
        <Container>
          <SimpleChatBody socket={socket} />
        </Container>
        <SimpleMessaeInput socket={socket} />
      </Container>
      <p>Connection Status: {isConnected ? "connected" : "Not connected"}</p>
    </div>
  );
}

export default AppDos;

